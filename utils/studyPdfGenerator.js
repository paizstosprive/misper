const PAGE_WIDTH = 595.28;
const PAGE_HEIGHT = 841.89;
const MARGIN = 50;
const CONTENT_WIDTH = PAGE_WIDTH - MARGIN * 2;

const COLORS = {
  ink: [31, 42, 45],
  muted: [95, 109, 113],
  brand: [15, 95, 104],
  brandDark: [18, 52, 59],
  brandSoft: [226, 243, 244],
  accent: [200, 135, 55],
  accentSoft: [252, 238, 217],
  line: [212, 221, 216],
  paper: [255, 253, 249],
  white: [255, 255, 255]
};

function rgb(color) {
  return color.map((value) => (value / 255).toFixed(3)).join(' ');
}

function sanitizeText(value) {
  return String(value || '')
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[’‘]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/[–—]/g, '-')
    .replace(/≤/g, '<=')
    .replace(/≈/g, '~=')
    .replace(/[^\x09\x0A\x0D\x20-\x7E]/g, '');
}

function escapePdfText(value) {
  return sanitizeText(value).replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)');
}

function estimateWidth(text, fontSize) {
  return sanitizeText(text).length * fontSize * 0.48;
}

function wrapText(text, fontSize, maxWidth = CONTENT_WIDTH) {
  const clean = sanitizeText(text).replace(/\s+/g, ' ').trim();
  if (!clean) {
    return [''];
  }

  const words = clean.split(' ');
  const lines = [];
  let current = '';

  for (const word of words) {
    const candidate = current ? `${current} ${word}` : word;
    if (estimateWidth(candidate, fontSize) <= maxWidth || !current) {
      current = candidate;
    } else {
      lines.push(current);
      current = word;
    }
  }

  if (current) {
    lines.push(current);
  }

  return lines;
}

class PdfBuilder {
  constructor(title) {
    this.title = sanitizeText(title);
    this.pages = [];
    this.current = null;
    this.y = PAGE_HEIGHT - MARGIN;
  }

  startPage() {
    this.current = [];
    this.pages.push(this.current);
    this.y = PAGE_HEIGHT - MARGIN - 28;
    this.drawHeader();
  }

  ensurePage(height = 24) {
    if (!this.current || this.y - height < MARGIN + 22) {
      this.startPage();
    }
  }

  command(value) {
    this.current.push(value);
  }

  setFill(color) {
    this.command(`${rgb(color)} rg`);
  }

  setStroke(color) {
    this.command(`${rgb(color)} RG`);
  }

  drawRect(x, y, width, height, color, strokeColor = null) {
    this.setFill(color);
    if (strokeColor) {
      this.setStroke(strokeColor);
      this.command(`${x.toFixed(2)} ${y.toFixed(2)} ${width.toFixed(2)} ${height.toFixed(2)} re B`);
    } else {
      this.command(`${x.toFixed(2)} ${y.toFixed(2)} ${width.toFixed(2)} ${height.toFixed(2)} re f`);
    }
  }

  drawLine(x1, y1, x2, y2, color = COLORS.line, width = 1) {
    this.setStroke(color);
    this.command(`${width.toFixed(2)} w ${x1.toFixed(2)} ${y1.toFixed(2)} m ${x2.toFixed(2)} ${y2.toFixed(2)} l S`);
  }

  drawHeader() {
    this.drawRect(0, PAGE_HEIGHT - 34, PAGE_WIDTH, 34, COLORS.paper);
    this.drawRect(0, PAGE_HEIGHT - 34, PAGE_WIDTH, 4, COLORS.accent);
    this.addText('Permis B Belgique', MARGIN, PAGE_HEIGHT - 23, 9, { bold: true, color: COLORS.brandDark, skipPageCheck: true });
    this.addText('Livre de theorie', PAGE_WIDTH - MARGIN - 82, PAGE_HEIGHT - 23, 9, { color: COLORS.muted, skipPageCheck: true });
  }

  addFooter() {
    this.pages.forEach((page, index) => {
      page.push(`${rgb(COLORS.line)} RG 0.75 w ${MARGIN} 34 m ${PAGE_WIDTH - MARGIN} 34 l S`);
      page.push(`BT /F1 8 Tf ${rgb(COLORS.muted)} rg ${MARGIN.toFixed(2)} 20 Td (Permis B Belgique) Tj ET`);
      page.push(`BT /F1 8 Tf ${rgb(COLORS.muted)} rg ${(PAGE_WIDTH - MARGIN - 48).toFixed(2)} 20 Td (Page ${index + 1}) Tj ET`);
    });
  }

  addText(text, x, y, fontSize, options = {}) {
    const font = options.bold ? 'F2' : 'F1';
    const color = options.color || COLORS.ink;
    if (!options.skipPageCheck) {
      this.ensurePage(fontSize * 1.4);
    }
    this.command(`BT /${font} ${fontSize} Tf ${rgb(color)} rg ${x.toFixed(2)} ${y.toFixed(2)} Td (${escapePdfText(text)}) Tj ET`);
  }

  addLine(text, options = {}) {
    const fontSize = options.fontSize || 11;
    const lineHeight = options.lineHeight || fontSize * 1.38;
    const x = options.x || MARGIN;

    this.ensurePage(lineHeight);
    this.addText(text, x, this.y, fontSize, options);
    this.y -= lineHeight;
  }

  addWrapped(text, options = {}) {
    const fontSize = options.fontSize || 11;
    const lineHeight = options.lineHeight || fontSize * 1.38;
    const x = options.x || MARGIN;
    const maxWidth = options.maxWidth || CONTENT_WIDTH - (x - MARGIN);
    const lines = wrapText(text, fontSize, maxWidth);

    lines.forEach((line) => this.addLine(line, { ...options, fontSize, lineHeight, x }));
  }

  addSpace(size = 10) {
    this.ensurePage(size);
    this.y -= size;
  }

  addCover(title, subtitle, chapters) {
    this.current = [];
    this.pages.push(this.current);
    this.y = PAGE_HEIGHT - MARGIN;
    this.drawRect(0, 0, PAGE_WIDTH, PAGE_HEIGHT, COLORS.paper);
    this.drawRect(0, PAGE_HEIGHT - 210, PAGE_WIDTH, 210, COLORS.brandDark);
    this.drawRect(0, PAGE_HEIGHT - 210, PAGE_WIDTH, 8, COLORS.accent);
    this.drawRect(MARGIN, PAGE_HEIGHT - 265, 130, 130, COLORS.brandSoft);
    this.drawRect(MARGIN + 16, PAGE_HEIGHT - 249, 98, 98, COLORS.white);
    this.drawRect(MARGIN + 34, PAGE_HEIGHT - 231, 62, 62, COLORS.accent);
    this.addText('PERMIS B', MARGIN + 33, PAGE_HEIGHT - 186, 13, { bold: true, color: COLORS.brandDark, skipPageCheck: true });
    this.addText('BELGIQUE', MARGIN + 34, PAGE_HEIGHT - 204, 10, { bold: true, color: COLORS.brandDark, skipPageCheck: true });
    this.addText('LIVRE VIRTUEL', MARGIN, PAGE_HEIGHT - 96, 11, { bold: true, color: COLORS.accent, skipPageCheck: true });
    wrapText(title, 30, CONTENT_WIDTH).forEach((line, index) => {
      this.addText(line, MARGIN, PAGE_HEIGHT - 128 - index * 36, 30, { bold: true, color: COLORS.white, skipPageCheck: true });
    });
    this.addWrappedAt(subtitle, MARGIN, PAGE_HEIGHT - 305, 13, CONTENT_WIDTH, COLORS.ink);

    this.drawRect(MARGIN, PAGE_HEIGHT - 385, CONTENT_WIDTH, 54, COLORS.white, COLORS.line);
    this.addText(`${chapters.length} chapitre${chapters.length > 1 ? 's' : ''}`, MARGIN + 18, PAGE_HEIGHT - 353, 13, { bold: true, color: COLORS.brand, skipPageCheck: true });
    this.addText('Cours, formules, exemples, pieges et checklist', MARGIN + 150, PAGE_HEIGHT - 353, 11, { color: COLORS.muted, skipPageCheck: true });

    this.addText('Support telechargeable pour reviser avant les examens', MARGIN, 86, 11, { color: COLORS.muted, skipPageCheck: true });
  }

  addWrappedAt(text, x, y, fontSize, maxWidth, color = COLORS.ink, bold = false) {
    wrapText(text, fontSize, maxWidth).forEach((line, index) => {
      this.addText(line, x, y - index * fontSize * 1.4, fontSize, { color, bold, skipPageCheck: true });
    });
  }

  addChapterTitle(chapter) {
    this.ensurePage(110);
    this.drawRect(MARGIN, this.y - 54, CONTENT_WIDTH, 68, COLORS.brandDark);
    this.drawRect(MARGIN, this.y - 54, 8, 68, COLORS.accent);
    this.addText(`Chapitre ${chapter.code}`, MARGIN + 22, this.y - 2, 11, { bold: true, color: COLORS.accent, skipPageCheck: true });
    this.addWrappedAt(chapter.title, MARGIN + 22, this.y - 25, 19, CONTENT_WIDTH - 44, COLORS.white, true);
    this.y -= 86;
  }

  addHeading(text) {
    this.ensurePage(45);
    this.addSpace(6);
    this.drawRect(MARGIN, this.y - 4, 24, 3, COLORS.accent);
    this.addWrapped(text, { fontSize: 15, lineHeight: 20, bold: true, color: COLORS.brandDark });
    this.addSpace(1);
  }

  addParagraph(text) {
    this.addWrapped(text, { fontSize: 10.5, lineHeight: 15, color: COLORS.ink });
    this.addSpace(4);
  }

  addBullet(text) {
    this.ensurePage(16);
    const bulletY = this.y + 2;
    this.drawRect(MARGIN + 6, bulletY - 4, 4, 4, COLORS.accent);
    this.addWrapped(text, { fontSize: 10.3, lineHeight: 14.5, x: MARGIN + 20, color: COLORS.ink });
  }

  addCallout(title, items, type = 'neutral') {
    const bg = type === 'accent' ? COLORS.accentSoft : type === 'brand' ? COLORS.brandSoft : COLORS.white;
    const stripe = type === 'accent' ? COLORS.accent : COLORS.brand;
    const normalizedItems = items.filter(Boolean);
    const lineCount = normalizedItems.reduce((total, item) => total + wrapText(item, 10, CONTENT_WIDTH - 52).length, 0);
    const height = 28 + lineCount * 14 + normalizedItems.length * 3;

    this.ensurePage(Math.min(height, PAGE_HEIGHT - MARGIN * 2));
    const top = this.y;
    this.drawRect(MARGIN, top - height, CONTENT_WIDTH, height, bg, COLORS.line);
    this.drawRect(MARGIN, top - height, 6, height, stripe);
    this.addText(title, MARGIN + 18, top - 18, 11, { bold: true, color: COLORS.brandDark, skipPageCheck: true });
    this.y = top - 34;
    normalizedItems.forEach((item) => {
      this.addWrapped(item, { fontSize: 10, lineHeight: 14, x: MARGIN + 22, maxWidth: CONTENT_WIDTH - 44, color: COLORS.ink });
      this.addSpace(2);
    });
    this.y = top - height - 10;
  }

  addFormulaCards(formulas) {
    formulas.forEach((formula) => {
      const body = `${formula.label}: ${formula.value}${formula.note ? ` - ${formula.note}` : ''}`;
      this.addCallout('Formule', [body], 'brand');
    });
  }

  addExampleCards(examples) {
    this.addCallout(
      'Exemples pratiques',
      examples.map((example) => `${example.title}: ${example.text}`),
      'neutral'
    );
  }

  addPageBreak() {
    this.startPage();
  }

  toBuffer() {
    this.addFooter();

    const objects = [];
    const addObject = (content) => {
      objects.push(content);
      return objects.length;
    };

    const catalogId = addObject('<< /Type /Catalog /Pages 2 0 R >>');
    const pagesId = addObject('');
    const fontId = addObject('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>');
    const boldFontId = addObject('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>');
    const pageIds = [];

    for (const page of this.pages) {
      const stream = page.join('\n');
      const contentId = addObject(`<< /Length ${Buffer.byteLength(stream, 'binary')} >>\nstream\n${stream}\nendstream`);
      const pageId = addObject(`<< /Type /Page /Parent ${pagesId} 0 R /MediaBox [0 0 ${PAGE_WIDTH} ${PAGE_HEIGHT}] /Resources << /Font << /F1 ${fontId} 0 R /F2 ${boldFontId} 0 R >> >> /Contents ${contentId} 0 R >>`);
      pageIds.push(pageId);
    }

    objects[pagesId - 1] = `<< /Type /Pages /Kids [${pageIds.map((id) => `${id} 0 R`).join(' ')}] /Count ${pageIds.length} >>`;

    let pdf = '%PDF-1.4\n';
    const offsets = [0];
    objects.forEach((object, index) => {
      offsets.push(Buffer.byteLength(pdf, 'binary'));
      pdf += `${index + 1} 0 obj\n${object}\nendobj\n`;
    });

    const xrefOffset = Buffer.byteLength(pdf, 'binary');
    pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
    for (let index = 1; index < offsets.length; index += 1) {
      pdf += `${String(offsets[index]).padStart(10, '0')} 00000 n \n`;
    }
    pdf += `trailer\n<< /Size ${objects.length + 1} /Root ${catalogId} 0 R /Info << /Title (${escapePdfText(this.title)}) >> >>\nstartxref\n${xrefOffset}\n%%EOF`;
    return Buffer.from(pdf, 'binary');
  }
}

function addList(builder, title, items, type = 'neutral') {
  builder.addCallout(title, items, type);
}

function addStudyChapter(builder, chapter, forceNewPage = true) {
  if (forceNewPage) {
    builder.addPageBreak();
  }

  const study = chapter.study;
  builder.addChapterTitle(chapter);
  builder.addParagraph(study.intro);
  addList(builder, 'Objectifs a maitriser', study.objectives, 'brand');

  study.sections.forEach((section, index) => {
    builder.addHeading(`${index + 1}. ${section.title}`);
    section.paragraphs.forEach((paragraph) => builder.addParagraph(paragraph));

    if (section.formulas && section.formulas.length) {
      builder.addFormulaCards(section.formulas);
    }

    if (section.examples && section.examples.length) {
      builder.addExampleCards(section.examples);
    }

    addList(builder, 'A retenir', section.bullets, 'accent');
  });

  addList(builder, "Pieges frequents a l'examen", study.examTips, 'accent');
  addList(builder, 'Checklist de revision', study.checklist, 'brand');
}

function addTableOfContents(builder, chapters) {
  if (chapters.length <= 1) {
    return;
  }

  builder.addPageBreak();
  builder.addChapterTitle({ code: '00', title: 'Sommaire' });
  chapters.forEach((chapter, index) => {
    builder.ensurePage(36);
    const top = builder.y;
    builder.drawRect(MARGIN, top - 25, CONTENT_WIDTH, 30, index % 2 === 0 ? COLORS.white : COLORS.paper, COLORS.line);
    builder.addText(String(index + 1).padStart(2, '0'), MARGIN + 12, top - 13, 10, { bold: true, color: COLORS.accent, skipPageCheck: true });
    builder.addText(`Chapitre ${chapter.code}`, MARGIN + 52, top - 13, 10, { bold: true, color: COLORS.brand, skipPageCheck: true });
    builder.addText(chapter.title, MARGIN + 126, top - 13, 10, { color: COLORS.ink, skipPageCheck: true });
    builder.y -= 34;
  });
}

function generateStudyPdf({ title, chapters }) {
  const builder = new PdfBuilder(title);
  builder.addCover(
    title,
    chapters.length > 1
      ? 'Cours complet chapitre par chapitre pour etudier avant les examens.'
      : chapters[0].study.intro,
    chapters
  );

  addTableOfContents(builder, chapters);
  chapters.forEach((chapter) => addStudyChapter(builder, chapter, true));

  return builder.toBuffer();
}

module.exports = {
  generateStudyPdf
};
