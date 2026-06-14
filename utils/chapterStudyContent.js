const studyChapters = {
  A: {
    readingTime: '35 min',
    level: 'Bases indispensables',
    image: '/images/img1.png',
    intro:
      "Ce chapitre pose les bases: comprendre la voie publique, lire l'espace autour de soi et adapter sa conduite aux amenagements, aux marquages, aux tunnels, aux passages a niveau, aux travaux et aux conditions d'adherence.",
    objectives: [
      'Identifier les parties de la voie publique et leur usage normal.',
      'Comprendre les marquages au sol et les zones a ne pas franchir.',
      'Adapter sa conduite aux routes etroites, tunnels, passages a niveau et chantiers.',
      "Anticiper les dangers lies a la visibilite, a l'adherence et aux obstacles."
    ],
    sections: [
      {
        title: 'La voie publique et ses parties',
        image: '/images/img3.png',
        paragraphs: [
          "La voie publique comprend tout espace ouvert a la circulation: chaussee, bandes de circulation, pistes cyclables, trottoirs, accotements, zones d'arret, zones neutralisees, carrefours et amenagements particuliers.",
          "La chaussee est destinee aux vehicules. Le trottoir est reserve aux pietons. Une piste cyclable signalee doit etre respectee: elle n'est ni une bande de stationnement, ni un raccourci pour eviter un ralentissement."
        ],
        bullets: [
          "Tenez normalement la droite quand la circulation le permet.",
          "Ne roulez pas sur les zones zebrees ou neutralisees.",
          "Ne franchissez pas une ligne continue sauf exception clairement autorisee.",
          "Gardez une marge laterale avec les cyclistes, pietons et obstacles."
        ]
      },
      {
        title: 'Marquages, ilots et obstacles',
        image: '/images/img2.png',
        paragraphs: [
          "Les marquages organisent les trajectoires. Une ligne discontinue permet un changement de bande si la manoeuvre est sure. Une ligne continue interdit en principe le franchissement. Les fleches directionnelles et ilots guident le placement avant une intersection.",
          "Quand un obstacle reduit votre partie de chaussee, la bonne reaction est de ralentir, observer et laisser passer si l'espace ne permet pas un croisement sans risque."
        ],
        bullets: [
          "Avant de changer de bande: retroviseurs, angle mort, clignotant, puis manoeuvre progressive.",
          "Devant un obstacle: ne forcez pas le passage et n'utilisez pas le trottoir.",
          "Dans une rue etroite: anticipez les portieres, pietons caches et cyclistes.",
          "Aux ilots directionnels: suivez le contournement impose."
        ]
      },
      {
        title: 'Routes speciales, tunnels et passages a niveau',
        image: '/images/img6.png',
        paragraphs: [
          "Une route pour automobiles ou une autoroute impose une conduite plus anticipee: vitesses plus elevees, sorties a preparer tot et interdiction de reculer apres une sortie manquee.",
          "A un passage a niveau, le conducteur ralentit, observe et ne s'engage jamais si la sortie n'est pas libre. Un train ne peut pas s'arreter rapidement."
        ],
        bullets: [
          "Sortie manquee: continuez jusqu'a la suivante.",
          "Tunnel: allumez les feux si necessaire, gardez vos distances et evitez tout arret inutile.",
          "Passage a niveau: ne vous arretez jamais sur les rails.",
          "Travaux: la signalisation temporaire prime sur les habitudes."
        ]
      },
      {
        title: 'Adherence et etat de la route',
        image: '/images/img7.png',
        paragraphs: [
          "Pluie, feuilles humides, neige, verglas, boue ou gravillons diminuent l'adherence. La voiture freine moins bien, tourne moins precisement et peut deraper plus facilement.",
          "La vitesse doit toujours rester compatible avec ce que vous voyez et avec l'etat de la chaussee. Une route large et vide n'autorise pas une conduite automatique."
        ],
        bullets: [
          "Route mouillee: augmentez les distances et evitez les gestes brusques.",
          "Feuilles humides: elles peuvent etre aussi glissantes qu'une surface mouillee.",
          "Brouillard ou forte pluie: ralentissez pour pouvoir vous arreter dans la zone visible.",
          "Dos-d'ane et retrecissements: ralentissez avant l'obstacle."
        ]
      }
    ],
    examTips: [
      "Une ligne continue reste une interdiction meme si vous mettez le clignotant.",
      "Une sortie d'autoroute manquee ne justifie jamais une marche arriere.",
      "Les zones zebrees et ilots ne sont pas des espaces de circulation normale.",
      "La bonne reponse commence souvent par ralentir, observer et adapter."
    ],
    checklist: [
      'Je sais reconnaitre les espaces reserves aux pietons, cyclistes et vehicules.',
      'Je sais expliquer la difference entre ligne continue et discontinue.',
      'Je sais reagir a un passage a niveau, un tunnel et une zone de travaux.',
      "Je sais adapter ma vitesse quand l'adherence ou la visibilite diminue."
    ]
  },
  B: {
    readingTime: '40 min',
    level: 'Usagers vulnerables',
    image: '/images/img21.png',
    intro:
      "La conduite theorique ne se limite pas aux panneaux. Il faut comprendre les autres usagers: pietons, enfants, cyclistes, cyclomotoristes, motos, bus, camions, vehicules prioritaires, personnes agees et usagers imprevisibles.",
    objectives: [
      'Savoir proteger les usagers vulnerables.',
      'Anticiper les comportements imprevisibles.',
      'Lire les intentions: bras du cycliste, clignotants, warnings, position sur la voie.',
      'Adapter distance, vitesse et trajectoire aux autres usagers.'
    ],
    sections: [
      {
        title: 'Pietons, enfants et personnes agees',
        image: '/images/img24.png',
        paragraphs: [
          "Le pieton engage ou sur le point de s'engager sur un passage doit etre protege. Un enfant peut traverser brusquement; une personne agee peut avoir besoin de plus de temps. Le conducteur doit donc creer une marge, pas seulement appliquer une regle.",
          "Pres d'une ecole, d'un arret de bus, d'une rue residentielle ou de voitures stationnees, le danger peut etre masque jusqu'au dernier moment."
        ],
        bullets: [
          "Ralentissez avant les passages pietons et soyez pret a vous arreter.",
          "Ne depassez pas a l'approche d'un passage pieton si la visibilite est masquee.",
          "Surveillez les trottoirs, pas seulement le vehicule devant.",
          "N'utilisez pas le klaxon pour forcer un pieton hesitant."
        ]
      },
      {
        title: 'Cyclistes, trottinettes et deux-roues',
        image: '/images/img25.png',
        paragraphs: [
          "Les deux-roues sont moins stables et plus exposes. Un cycliste peut contourner une portiere, un trou ou une voiture stationnee. Un cyclomotoriste ou un motard peut se deporter pour eviter un danger.",
          "La distance laterale est essentielle. Une manoeuvre techniquement possible peut rester dangereuse si l'espace ou la visibilite sont insuffisants."
        ],
        bullets: [
          "Attendez une vraie ouverture avant de depasser un cycliste.",
          "Respectez les pistes cyclables et ne les bloquez pas.",
          "Un bras tendu indique souvent une intention de tourner ou de se deporter.",
          "Gardez plus d'espace avec les deux-roues par vent, pluie ou route degradee."
        ]
      },
      {
        title: 'Bus, camions et vehicules encombrants',
        image: '/images/img22.png',
        paragraphs: [
          "Un bus a l'arret peut cacher un pieton. Un camion masque la vue, freine differemment et a des angles morts importants. Le conducteur d'une voiture doit eviter de se placer dans une zone invisible pour le chauffeur.",
          "En agglomeration, lorsqu'un bus quitte son arret, il faut faciliter sa reinsertion si cela peut se faire sans danger."
        ],
        bullets: [
          "Ne collez pas un camion: vous perdez la vue sur la route.",
          "Mefiez-vous des pietons devant ou derriere un bus.",
          "Gardez une trajectoire lisible dans les rues etroites.",
          "Anticipez les grands rayons de braquage des vehicules longs."
        ]
      },
      {
        title: 'Vehicules prioritaires et conduite defensive',
        image: '/images/img28.png',
        paragraphs: [
          "Une ambulance, un vehicule de police ou de pompiers avec signaux prioritaires doit pouvoir passer. La reaction correcte est de degager progressivement et sans creer un nouveau danger.",
          "La conduite defensive consiste a prevoir l'erreur possible des autres: un conducteur qui hesite, un pieton qui regarde ailleurs, un cycliste qui evite un obstacle ou un vehicule qui freine soudainement."
        ],
        bullets: [
          "Ne freinez pas brutalement au milieu de la voie.",
          "Cherchez un espace pour vous ranger sans bloquer le carrefour.",
          "Au feu vert, verifiez encore que personne ne franchit le carrefour.",
          "Une priorite ne dispense jamais de prudence."
        ]
      }
    ],
    examTips: [
      "Un usager vulnerable impose souvent de ralentir meme si vous avez la priorite.",
      "Le bus et les voitures stationnees sont des masques visuels classiques dans les questions.",
      "Les vehicules prioritaires doivent etre facilites, mais pas au prix d'une manoeuvre dangereuse.",
      "Le clignotant ou le bras d'un usager annonce une intention: il faut l'anticiper."
    ],
    checklist: [
      'Je ralentis devant les passages pietons et les zones scolaires.',
      'Je garde une distance laterale suffisante avec les deux-roues.',
      'Je sais reagir face a une ambulance ou un vehicule prioritaire.',
      'Je sais identifier les masques visuels: bus, camion, voitures stationnees.'
    ]
  },
  C: {
    readingTime: '38 min',
    level: 'Vehicule et securite',
    image: '/images/img41.png',
    intro:
      "Connaitre sa voiture aide a eviter les pannes, les pertes de controle et les mauvaises reactions. Le chapitre couvre les masses du vehicule, le chargement, les remorques, les pneus, les feux, la visibilite, les ceintures, les enfants et les controles avant depart.",
    objectives: [
      'Comprendre la tare, la charge utile, la M.M.A. et la M.M.C.',
      'Savoir charger une voiture ou tracter une remorque sans depasser les masses autorisees.',
      'Savoir verifier pneus, feux, pare-brise et essuie-glaces.',
      'Installer correctement les enfants et les passagers.',
      'Choisir le bon eclairage selon la situation.',
      'Comprendre comment l etat du vehicule influence freinage et tenue de route.'
    ],
    sections: [
      {
        title: 'Masses: tare, charge utile, M.M.A. et M.M.C.',
        image: '/images/img42.png',
        paragraphs: [
          "La tare est la masse du vehicule a vide. La charge utile correspond a ce que vous pouvez ajouter: passagers, bagages, materiel, coffre de toit, porte-velos et parfois accessoires. La masse reelle du vehicule est donc la tare plus tout ce qui est transporte.",
          "La M.M.A. signifie masse maximale autorisee. C'est la masse maximale que le vehicule peut avoir une fois charge. Il ne suffit pas que le coffre ferme: si la masse reelle depasse la M.M.A., le vehicule devient moins stable, freine moins bien et vous etes en infraction.",
          "La M.M.C. est la masse maximale de la combinaison, c'est-a-dire la masse maximale autorisee pour l'ensemble vehicule tracteur plus remorque. Elle est importante lorsque vous tractez une remorque, une caravane ou un porte-charge tracte."
        ],
        formulas: [
          {
            label: 'Masse reelle',
            value: 'Vehicule + passagers + bagages + accessoires',
            note: 'C est cette masse reelle qui ne doit pas depasser la M.M.A.'
          },
          {
            label: 'Charge utile',
            value: 'M.M.A. - tare',
            note: 'Elle indique ce que vous pouvez encore transporter dans ou sur le vehicule.'
          },
          {
            label: 'Avec remorque',
            value: 'Vehicule charge + remorque chargee <= M.M.C.',
            note: 'La remorque a aussi sa propre masse maximale autorisee.'
          }
        ],
        examples: [
          {
            title: 'Exemple simple',
            text: 'Si une voiture a une tare de 1 250 kg et une M.M.A. de 1 750 kg, la charge utile theorique est de 500 kg.'
          },
          {
            title: 'Attention aux passagers',
            text: 'Quatre adultes, des valises et un coffre de toit peuvent rapidement consommer toute la charge utile.'
          },
          {
            title: 'Avec une remorque',
            text: 'Il faut verifier la masse du vehicule charge, la masse de la remorque chargee et la M.M.C. de l ensemble.'
          }
        ],
        bullets: [
          "M.M.A.: maximum autorise pour le vehicule charge.",
          "M.M.C.: maximum autorise pour l'ensemble vehicule plus remorque.",
          "La surcharge allonge la distance de freinage et degrade la tenue de route.",
          "Le permis, le certificat d'immatriculation et les documents du vehicule permettent de verifier les masses."
        ]
      },
      {
        title: 'Chargement et stabilite',
        image: '/images/img43.png',
        paragraphs: [
          "Un chargement doit etre reparti, fixe et place de maniere a ne pas gener la vue. Un objet libre dans l'habitacle devient dangereux lors d'un freinage ou d'un choc.",
          "Le poids place trop haut ou trop loin vers l'arriere peut modifier le comportement du vehicule: direction moins precise, freinage plus long, risque de perte de stabilite et mauvaise repartition sur les pneus.",
          "Avec un coffre de toit, un porte-velos ou une remorque, la voiture peut etre plus sensible au vent lateral et demander une distance de freinage plus longue. Il faut rouler plus souplement et anticiper davantage."
        ],
        bullets: [
          "Placez les objets lourds bas et bien cales.",
          "Ne masquez pas la lunette arriere si vous devez l'utiliser.",
          "Signalez et securisez tout chargement qui depasse selon les regles.",
          "Adaptez la pression des pneus si le constructeur le prevoit.",
          "Fixez les objets dans l'habitacle: ils peuvent devenir des projectiles en cas de choc."
        ]
      },
      {
        title: 'Pneus, freinage et entretien',
        image: '/images/img46.png',
        paragraphs: [
          "Les pneus sont le seul contact entre le vehicule et la route. Pression, usure, profondeur des sculptures et etat general influencent l'adherence, la consommation, le freinage et le risque d'aquaplanage.",
          "Un voyant rouge, un bruit anormal, une pedale inhabituelle ou une direction qui tire doivent etre pris au serieux. Cherchez un endroit sur pour vous arreter si le probleme peut compromettre la securite."
        ],
        bullets: [
          "Controlez regulierement pression et usure.",
          "Remplacez les essuie-glaces uses: sous la pluie, la visibilite est vitale.",
          "Avant l'hiver: batterie, pneus, liquide lave-glace et degivrage.",
          "Un entretien ne sert pas seulement a eviter une panne: il protege les autres."
        ]
      },
      {
        title: 'Eclairage et signalisation du vehicule',
        image: '/images/img44.png',
        paragraphs: [
          "Les feux servent a voir, a etre vu et a informer. Les feux de croisement sont utilises de nuit, en tunnel ou par mauvaise visibilite. Les feux de route eclairent plus loin mais doivent etre coupes si vous risquez d'eblouir.",
          "Les feux stop signalent un freinage, les clignotants annoncent une intention, les feux de detresse signalent un danger ou une situation anormale. Ils ne donnent pas de priorite et n'autorisent pas un stationnement interdit."
        ],
        bullets: [
          "Controlez que tous les feux fonctionnent.",
          "N'eblouissez pas les autres conducteurs.",
          "Mettez le clignotant assez tot, mais seulement si la manoeuvre reste possible.",
          "Les warnings ne transforment pas une infraction en manoeuvre autorisee."
        ]
      },
      {
        title: 'Ceintures, appui-tete et installation',
        image: '/images/img49.png',
        paragraphs: [
          "Une bonne position de conduite permet d'observer, de freiner et de tourner correctement. L'appui-tete doit proteger la nuque, la ceinture doit etre portee correctement et les retroviseurs doivent reduire les angles morts.",
          "Un animal transporte doit etre retenu. Un passager ou objet mal installe peut perturber le conducteur ou devenir dangereux en cas de freinage."
        ],
        bullets: [
          "Reglez siege, retroviseurs et appui-tete avant de demarrer.",
          "Degivrez completement les vitres avant de partir.",
          "Ne conduisez pas avec un champ de vision reduit.",
          "Attachez les passagers et securisez les objets."
        ]
      },
      {
        title: 'Enfants et dispositifs de retenue',
        image: '/images/img50.png',
        paragraphs: [
          "Un enfant ne doit pas etre attache comme un adulte si sa taille ne permet pas a la ceinture de passer correctement. En Belgique, un enfant de moins de 1,35 m doit en principe voyager dans un dispositif de retenue pour enfant adapte: siege bebe, siege enfant ou rehausseur selon sa taille et son poids.",
          "Le dispositif doit etre homologue, adapte a l'enfant et correctement installe. Une ceinture mal placee, par exemple sur le cou ou le ventre, peut blesser gravement en cas de freinage ou de choc.",
          "Un siege dos a la route ne peut pas etre place devant un airbag passager actif. Si un enfant est installe a l'avant dans un dispositif dos a la route, l'airbag frontal passager doit etre desactive selon les instructions du vehicule."
        ],
        formulas: [
          {
            label: 'Regle de base',
            value: 'Moins de 1,35 m = dispositif adapte',
            note: 'Siege ou rehausseur selon la morphologie de l enfant.'
          },
          {
            label: 'A partir de 1,35 m',
            value: 'Ceinture possible si elle se place correctement',
            note: "La sangle doit passer sur l'epaule et le bassin, pas sur le cou ni le ventre."
          }
        ],
        examples: [
          {
            title: 'Enfant trop petit pour la ceinture',
            text: 'S il mesure moins de 1,35 m, il doit utiliser un siege ou rehausseur adapte, meme pour un trajet court.'
          },
          {
            title: 'Siege dos a la route',
            text: "A l'avant, il faut desactiver l'airbag passager. Sinon le deploiement de l'airbag peut etre tres dangereux."
          },
          {
            title: 'Trajet court',
            text: 'La regle vaut aussi pour aller a l ecole, au magasin ou faire quelques rues. Les accidents arrivent souvent pres du domicile.'
          }
        ],
        bullets: [
          "Choisissez le siege selon la taille et le poids de l'enfant.",
          "Serrez correctement le harnais ou la ceinture.",
          "Ne placez jamais la sangle diagonale sous le bras ou derriere le dos.",
          "La place arriere est en general la plus sure pour les enfants.",
          "Verifiez que le siege est bien fixe avant chaque depart."
        ]
      }
    ],
    examTips: [
      "Un feu de detresse ne donne jamais un droit special.",
      "M.M.A. = maximum autorise pour le vehicule charge; M.M.C. = maximum autorise pour vehicule plus remorque.",
      "Une voiture chargee demande plus de distance pour freiner.",
      "Un enfant de moins de 1,35 m doit en principe etre installe dans un dispositif adapte.",
      "Un siege dos a la route devant un airbag actif est dangereux.",
      "Les feux de route doivent etre abaisses pour ne pas eblouir.",
      "Pneus, visibilite et eclairage reviennent souvent dans les questions de securite."
    ],
    checklist: [
      'Je sais expliquer tare, charge utile, M.M.A. et M.M.C.',
      'Je sais verifier qu un chargement ou une remorque ne depasse pas les masses autorisees.',
      'Je sais installer un enfant de moins de 1,35 m dans un dispositif adapte.',
      'Je sais quel eclairage utiliser selon la situation.',
      'Je controle pneus, feux, essuie-glaces et pare-brise.',
      'Je comprends pourquoi un chargement mal fixe est dangereux.'
    ]
  },
  D: {
    readingTime: '55 min',
    level: 'Vitesse et distances',
    image: '/images/img61.png',
    intro:
      "La vitesse influence presque tout: champ visuel, temps de reaction, distance de freinage, gravite du choc et capacite a eviter un danger. Une limitation est un maximum, pas une vitesse a atteindre.",
    objectives: [
      'Calculer une distance de reaction avec la methode des secondes.',
      'Estimer une distance de freinage sur route seche et la corriger sur route mouillee.',
      "Additionner reaction et freinage pour obtenir la distance d'arret.",
      'Adapter la vitesse a la visibilite, au trafic, a la meteo et aux usagers.',
      'Comprendre les zones 20, 30, 50, 70, 90 et autoroutes.',
      'Eviter les fautes liees a une vitesse excessive ou inadaptee.'
    ],
    sections: [
      {
        title: 'Distance de reaction',
        image: '/images/img62.png',
        paragraphs: [
          "La distance de reaction est la distance parcourue entre le moment ou vous voyez le danger et le moment ou vous commencez reellement a freiner. On l'appelle parfois distance de reflexe ou distance de reflexion dans le langage courant, mais le terme correct est distance de reaction.",
          "Un conducteur attentif met souvent environ 1 seconde a reagir. Pendant cette seconde, la voiture continue d'avancer a la meme vitesse. Si le conducteur est fatigue, distrait, sous alcool, sous drogues, surpris ou au telephone, le temps de reaction peut devenir beaucoup plus long.",
          "Pour l'examen, retenez surtout la methode rapide: vitesse divisee par 10, puis multipliee par 3. Cela donne une estimation en metres pour 1 seconde de reaction."
        ],
        formulas: [
          {
            label: 'Formule pratique',
            value: 'Distance de reaction = (vitesse / 10) x 3',
            note: 'Valable pour environ 1 seconde de reaction. Exemple: 50 km/h -> 5 x 3 = 15 m.'
          },
          {
            label: 'Formule exacte',
            value: 'Distance = vitesse en m/s x temps',
            note: 'Pour convertir km/h en m/s, divisez par 3,6. Exemple: 50 / 3,6 = 13,9 m/s.'
          }
        ],
        examples: [
          {
            title: 'A 30 km/h',
            text: '3 x 3 = environ 9 m parcourus avant de commencer a freiner.'
          },
          {
            title: 'A 50 km/h',
            text: '5 x 3 = environ 15 m. C est deja la longueur de plusieurs voitures.'
          },
          {
            title: 'A 90 km/h',
            text: '9 x 3 = environ 27 m. Si vous regardez votre telephone une seconde, vous avancez presque 30 m sans reaction.'
          }
        ],
        bullets: [
          "Plus la vitesse est elevee, plus la distance parcourue pendant la reaction augmente.",
          "Fatigue, alcool, drogues, GSM et stress allongent le temps de reaction.",
          "La distance de reaction existe meme avec de tres bons freins.",
          "Si la visibilite est courte, vous devez rouler assez lentement pour reagir dans ce que vous voyez."
        ]
      },
      {
        title: 'Distance de freinage',
        image: '/images/img63.png',
        paragraphs: [
          "La distance de freinage est la distance parcourue entre le moment ou les freins commencent a agir et l'arret complet du vehicule. Elle depend fortement de la vitesse, de l'adherence, de l'etat des pneus, du chargement, de la pente et de l'etat de la route.",
          "La vitesse est le facteur le plus important. Quand la vitesse double, la distance de freinage ne double pas simplement: elle augmente environ par quatre. C'est pour cela qu'une petite difference de vitesse peut changer fortement la gravite d'une situation.",
          "Pour une estimation simple sur route seche, on utilise souvent: vitesse divisee par 10, puis ce nombre multiplie par lui-meme. Sur route mouillee, il faut augmenter fortement cette distance; comme repere d'etude, retenez environ le double."
        ],
        formulas: [
          {
            label: 'Route seche',
            value: 'Freinage ~= (vitesse / 10) x (vitesse / 10)',
            note: 'Exemple: 50 km/h -> 5 x 5 = environ 25 m.'
          },
          {
            label: 'Route mouillee',
            value: 'Freinage ~= distance seche x 2',
            note: 'Exemple: 50 km/h -> 25 m x 2 = environ 50 m.'
          }
        ],
        examples: [
          {
            title: 'A 30 km/h sur sec',
            text: '3 x 3 = environ 9 m de freinage.'
          },
          {
            title: 'A 50 km/h sur sec',
            text: '5 x 5 = environ 25 m de freinage. Sur route mouillee, prevoyez environ 50 m.'
          },
          {
            title: 'A 90 km/h sur sec',
            text: '9 x 9 = environ 81 m de freinage. Sur route mouillee, cela peut approcher 160 m.'
          }
        ],
        bullets: [
          "Pneus uses, pression incorrecte, pluie, verglas, gravillons et surcharge allongent le freinage.",
          "En descente, le vehicule garde plus d'energie: il faut anticiper davantage.",
          "L'ABS aide a garder le controle, mais il ne supprime pas les lois physiques.",
          "La distance de freinage augmente beaucoup plus vite que la vitesse."
        ]
      },
      {
        title: "Distance d'arret",
        image: '/images/img67.png',
        paragraphs: [
          "La distance d'arret est la distance totale necessaire pour immobiliser le vehicule apres l'apparition d'un danger. Elle additionne la distance de reaction et la distance de freinage.",
          "C'est cette distance qui compte dans la vraie vie: si un enfant traverse, si le vehicule devant freine, si un obstacle apparait, vous avez d'abord un temps de reaction, puis seulement le freinage.",
          "A l'examen, une question peut donner une vitesse et demander si la voiture peut s'arreter avant un obstacle. Il faut additionner reaction et freinage, puis comparer avec la distance disponible."
        ],
        formulas: [
          {
            label: 'Formule a retenir',
            value: "Distance d'arret = reaction + freinage",
            note: "On additionne toujours les deux. Le conducteur ne freine pas instantanement."
          },
          {
            label: 'Exemple a 50 km/h sur sec',
            value: '15 m + 25 m = environ 40 m',
            note: '15 m de reaction, puis 25 m de freinage.'
          },
          {
            label: 'Exemple a 50 km/h sur mouille',
            value: '15 m + 50 m = environ 65 m',
            note: "La reaction ne change pas forcement, mais l'adherence allonge le freinage."
          }
        ],
        examples: [
          {
            title: 'Obstacle a 30 m, vitesse 50 km/h sur sec',
            text: "Distance d'arret estimee: 40 m. Vous n'avez pas assez de place: il fallait rouler moins vite ou garder plus de distance."
          },
          {
            title: 'Obstacle a 80 m, vitesse 70 km/h sur sec',
            text: "Reaction: 7 x 3 = 21 m. Freinage: 7 x 7 = 49 m. Total: environ 70 m. C'est possible sur sec, mais la marge devient faible."
          },
          {
            title: 'Meme situation sur route mouillee',
            text: "Reaction: 21 m. Freinage mouille: 49 x 2 = 98 m. Total: environ 119 m. La distance disponible ne suffit plus."
          }
        ],
        bullets: [
          "Gardez une distance de securite suffisante avec le vehicule devant.",
          "Sous la pluie, doublez votre prudence: l'arret total devient beaucoup plus long.",
          "Si vous ne pouvez pas vous arreter dans la distance visible, votre vitesse est inadaptee.",
          "La distance d'arret explique pourquoi suivre de tres pres est dangereux, meme a vitesse moderee."
        ]
      },
      {
        title: 'Methode des deux secondes',
        image: '/images/img68.png',
        paragraphs: [
          "Pour garder vos distances en circulation, utilisez la methode des deux secondes. Choisissez un repere fixe au bord de la route. Quand le vehicule devant passe ce repere, comptez calmement deux secondes. Si vous atteignez le repere avant la fin du compte, vous suivez trop pres.",
          "Cette methode fonctionne mieux qu'une estimation en metres, car la distance augmente automatiquement avec la vitesse. Par mauvaise meteo, de nuit, avec un vehicule charge ou derriere un camion, il faut augmenter la marge."
        ],
        examples: [
          {
            title: 'Par temps sec',
            text: 'Gardez au moins deux secondes avec le vehicule devant.'
          },
          {
            title: 'Sous la pluie ou mauvaise visibilite',
            text: 'Passez a trois ou quatre secondes, car le freinage et la perception sont moins bons.'
          }
        ],
        bullets: [
          "Deux secondes est un minimum par bonnes conditions.",
          "Derriere un camion, gardez plus d'espace pour retrouver de la visibilite.",
          "En trafic dense, ne compensez pas par une distance trop courte.",
          "Si quelqu'un vous colle, augmentez doucement votre marge devant vous."
        ]
      },
      {
        title: 'Adapter, pas seulement respecter',
        image: '/images/img65.png',
        paragraphs: [
          "Respecter la limitation ne suffit pas toujours. Vous devez aussi adapter votre allure aux circonstances: brouillard, ecole, travaux, virage, route etroite, trafic dense, animaux, pietons ou chaussée glissante.",
          "La question d'examen demande souvent si vous pouvez rouler a la vitesse maximale. La reponse correcte est souvent: seulement si les conditions le permettent."
        ],
        bullets: [
          "Zone 30: maximum 30, mais parfois moins si des pietons sont presents.",
          "Brouillard: pouvoir s'arreter dans la zone visible.",
          "Virage masque: lever le pied avant le virage.",
          "Descente: surveiller la vitesse qui peut augmenter seule."
        ]
      },
      {
        title: 'Zones et limitations',
        image: '/images/img64.png',
        paragraphs: [
          "Les zones de limitation s'appliquent jusqu'au panneau de fin de zone. Une zone residentielle ou de rencontre impose une allure tres reduite et une protection maximale des pietons.",
          "Un panneau de limitation fixe un maximum. Il ne cree pas une obligation d'atteindre cette vitesse. Apres la fin d'une limitation specifique, il faut appliquer la limitation generale du lieu et rester prudent."
        ],
        bullets: [
          "Zone 20 ou residentielle: pietons tres proteges, allure tres lente.",
          "Zone 30: quartier sensible, ecole ou environnement urbain.",
          "50 en agglomeration: reste soumis aux panneaux et conditions.",
          "Autoroute: vitesse elevee, distances et anticipation accrues."
        ]
      },
      {
        title: 'Vitesse et gravite',
        image: '/images/img66.png',
        paragraphs: [
          "Une vitesse excessive ne fait pas seulement gagner ou perdre du temps: elle aggrave les consequences du choc. Elle reduit le champ de perception et laisse moins de temps aux autres usagers pour comprendre votre approche.",
          "Pres d'une ecole, d'un passage pieton ou d'un carrefour, quelques km/h de trop peuvent faire la difference entre un freinage maitrise et une collision."
        ],
        bullets: [
          "En ville, cherchez les dangers lateraux: trottoirs, portieres, traversées.",
          "Dans les bouchons fluides, gardez une marge malgre la faible allure.",
          "En travaux, ralentissez pour les ouvriers, deviations et couloirs etroits.",
          "Ne suivez jamais de tres pres pour gagner du temps."
        ]
      }
    ],
    examTips: [
      "Une vitesse maximale est une limite, pas une cible.",
      "Distance de reaction: vitesse / 10 x 3.",
      "Distance de freinage sur sec: vitesse / 10 x vitesse / 10.",
      "Distance d'arret = distance de reaction + distance de freinage.",
      "Brouillard, pluie, fatigue et GSM reviennent souvent comme facteurs aggravants.",
      "A l'examen, une vitesse inadaptee peut etre aussi grave qu'une vitesse interdite."
    ],
    checklist: [
      'Je sais calculer une distance de reaction approximative.',
      'Je sais estimer une distance de freinage sur route seche et mouillee.',
      "Je sais additionner reaction et freinage pour obtenir la distance d'arret.",
      'Je sais pourquoi doubler la vitesse multiplie fortement le freinage.',
      'Je ralentis avant un passage pieton, une ecole ou un virage masque.',
      'Je distingue limitation maximale et vitesse adaptee.'
    ]
  },
  E: {
    readingTime: '36 min',
    level: 'Manoeuvres laterales',
    image: '/images/img81.png',
    intro:
      "Croiser et depasser demandent observation, espace, vitesse adaptee et cooperation. Une manoeuvre n'est correcte que si elle est autorisee, annoncee et realisee sans danger.",
    objectives: [
      'Savoir quand renoncer a depasser.',
      'Comprendre les croisements difficiles.',
      'Controler retroviseurs, angles morts et signalisation.',
      'Se rabattre avec une marge suffisante.'
    ],
    sections: [
      {
        title: 'Croisement',
        image: '/images/img8.png',
        paragraphs: [
          "Le croisement est simple sur une chaussee large, mais il devient delicat en rue etroite, avec obstacles, bus, vehicules stationnes ou chantier.",
          "La bonne conduite consiste a ralentir, evaluer l'espace et parfois s'arreter pour laisser passer. Forcer un croisement met en danger les retros, les cyclistes et les pietons."
        ],
        bullets: [
          "Ralentissez avant l'espace etroit, pas au dernier moment.",
          "Ne montez pas sur le trottoir pour forcer le passage.",
          "Avec un bus ou camion, prevoyez plus de largeur.",
          "La cooperation est souvent la solution la plus sure."
        ]
      },
      {
        title: 'Depassement: conditions indispensables',
        image: '/images/img82.png',
        paragraphs: [
          "On depasse normalement par la gauche. Avant de depasser, il faut verifier que la manoeuvre est autorisee, que la visibilite est suffisante, que personne ne vous depasse deja et que vous pouvez vous rabattre sans gener.",
          "Une ligne continue, un virage, un sommet de cote, une intersection proche ou un passage pieton peuvent rendre le depassement interdit ou dangereux."
        ],
        bullets: [
          "Retro interieur, retro exterieur, angle mort, clignotant.",
          "Ne depassez pas si la voie opposee n'est pas visible assez loin.",
          "Ne depassez pas un vehicule qui annonce un tournant a gauche.",
          "Ne depassez pas a l'approche d'un passage pieton masque."
        ]
      },
      {
        title: 'Depasser les usagers vulnerables',
        image: '/images/img86.png',
        paragraphs: [
          "Depasser un cycliste ou un cyclomotoriste exige plus qu'un simple espace technique. Il faut tenir compte de leur stabilite, de l'effet du souffle, des obstacles et du risque d'ecart.",
          "Si la route est trop etroite ou si la visibilite est insuffisante, restez derriere. Perdre quelques secondes vaut mieux qu'un depassement dangereux."
        ],
        bullets: [
          "Laissez une marge laterale confortable.",
          "Ne vous rabattez pas juste devant le cycliste.",
          "Anticipez les portieres et obstacles que le cycliste devra eviter.",
          "Renoncez si un virage ou une ligne continue empeche une manoeuvre sure."
        ]
      },
      {
        title: 'Se rabattre et etre depasse',
        image: '/images/img89.png',
        paragraphs: [
          "Apres un depassement, il faut se rabattre seulement quand le vehicule depasse est clairement a distance. Se rabattre trop tot oblige l'autre a freiner ou le serre contre le bord.",
          "Si vous etes depasse, gardez une allure reguliere, ne vous deportez pas et n'accelerez pas pour gener."
        ],
        bullets: [
          "Revenez progressivement dans votre bande.",
          "Ne coupez pas la trajectoire de l'usager depasse.",
          "En circulation dense, evitez les zigzags entre files.",
          "Un depassement apparent par la droite n'est admis que dans des cas precis de circulation en files ou bandes distinctes."
        ]
      }
    ],
    examTips: [
      "Si la visibilite est insuffisante, la reponse correcte est de renoncer.",
      "Une ligne continue interdit le franchissement meme si la route semble libre.",
      "Le passage pieton masque est un piege classique.",
      "Le clignotant annonce la manoeuvre, mais ne la rend pas prioritaire."
    ],
    checklist: [
      'Je sais citer les controles avant depassement.',
      'Je sais quand renoncer: virage, sommet, passage pieton, intersection, ligne continue.',
      'Je sais croiser prudemment dans une rue etroite.',
      'Je sais me rabattre sans serrer.'
    ]
  },
  F: {
    readingTime: '44 min',
    level: 'Priorites',
    image: '/images/img90.png',
    intro:
      "La priorite organise le passage, mais elle ne donne jamais le droit de creer un danger. Ce chapitre couvre agents, feux, panneaux de priorite, priorite de droite, carrefours, trams, bus et vehicules prioritaires.",
    objectives: [
      "Connaitre l'ordre de valeur: agent, feux, panneaux, regles generales.",
      'Appliquer la priorite de droite quand aucune signalisation ne change la regle.',
      'Savoir entrer ou non dans un carrefour.',
      'Comprendre les conflits avec pietons, cyclistes, trams et bus.'
    ],
    sections: [
      {
        title: 'Ordre des injonctions',
        image: '/images/img91.png',
        paragraphs: [
          "Un agent qualifie prime sur les feux, les panneaux et les marquages. Un feu prime sur une regle generale. Les panneaux et marquages organisent ensuite les priorites. En absence de signalisation particuliere, on applique les regles generales, dont la priorite de droite.",
          "Quand l'agent leve le bras, les usagers non engages doivent s'arreter. Ceux deja engages doivent degager le carrefour."
        ],
        bullets: [
          "Agent de profil: passage autorise dans les directions permises.",
          "Agent vu de face ou de dos: arret.",
          "Sifflet: attire l'attention sur une injonction.",
          "L'ordre d'un agent doit etre respecte meme si le feu est vert."
        ]
      },
      {
        title: 'Feux et carrefours',
        image: '/images/img92.png',
        paragraphs: [
          "Au feu rouge, on s'arrete avant la ligne d'arret ou avant le feu. Au feu orange fixe, on s'arrete si cela peut se faire en securite. Au feu vert, on peut passer, mais seulement si le carrefour peut etre degage.",
          "Entrer dans un carrefour encombre malgre le vert peut bloquer les autres usagers, y compris les vehicules prioritaires."
        ],
        bullets: [
          "Ne vous arretez pas sur un passage pieton.",
          "Au vert, regardez quand meme les usagers qui finissent de traverser.",
          "Ne bloquez pas une intersection.",
          "Un clignotant ne donne pas la priorite."
        ]
      },
      {
        title: 'Panneaux de priorite et priorite de droite',
        image: '/images/img93.png',
        paragraphs: [
          "Le STOP impose un arret complet, meme si la voie semble libre. Le cedez-le-passage impose de laisser passer les usagers prioritaires sans les obliger a freiner ou changer de trajectoire.",
          "La priorite de droite s'applique aux intersections sans signalisation particuliere. Il faut regarder tot a droite pour eviter un freinage brutal."
        ],
        bullets: [
          "Route prioritaire: restez prudent, un autre peut commettre une erreur.",
          "Fin de route prioritaire: verifiez le nouveau regime aux intersections.",
          "Stop: arret reel, pas simple ralentissement.",
          "Ceder: ne pas gener l'usager prioritaire."
        ]
      },
      {
        title: 'Trams, bus et changements de direction',
        image: '/images/img94.png',
        paragraphs: [
          "Le tram a une trajectoire imposee et freine moins facilement qu'une voiture. Il faut l'anticiper, surtout en carrefour et par chaussée humide.",
          "En tournant a droite, surveillez les cyclistes qui continuent tout droit a votre droite. En tournant a gauche, laissez passer les vehicules venant en sens inverse quand la situation l'impose."
        ],
        bullets: [
          "Facilitez la reinsertion d'un bus en agglomeration si possible.",
          "Ne coupez pas la trajectoire d'un cycliste ou d'un tram.",
          "Un geste d'un autre conducteur ne remplace pas votre observation.",
          "Avec un vehicule prioritaire en mission, degagez le passage sans danger."
        ]
      }
    ],
    examTips: [
      "L'agent qualifie prime sur tout le reste.",
      "Le STOP exige toujours un arret complet.",
      "Le feu vert ne permet pas d'entrer dans un carrefour bloque.",
      "La priorite ne supprime jamais l'obligation d'eviter l'accident."
    ],
    checklist: [
      "Je connais l'ordre agent, feux, panneaux, regles.",
      "Je sais appliquer stop, cedez-le-passage et priorite de droite.",
      "Je sais quoi faire si le carrefour est bloque.",
      "Je surveille cyclistes et pietons lors des changements de direction."
    ]
  },
  G: {
    readingTime: '34 min',
    level: 'Placement et directions',
    image: '/images/img95.png',
    intro:
      "Savoir ou circuler, c'est choisir la bonne bande au bon moment, respecter les sens interdits, directions obligatoires, ronds-points, bandes reservees et deviations.",
    objectives: [
      'Se placer tot avant une intersection.',
      'Respecter sens uniques, sens interdits et directions obligatoires.',
      'Lire les fleches et panneaux de bande.',
      'Gerer ronds-points, bifurcations et fin de bande.'
    ],
    sections: [
      {
        title: 'Choisir sa voie',
        image: '/images/img96.png',
        paragraphs: [
          "Les panneaux de direction, fleches au sol et indications au-dessus des bandes doivent etre lus suffisamment tot. Un changement de bande au dernier moment cree un risque direct.",
          "Si vous vous etes trompe de bande, il vaut souvent mieux poursuivre dans la direction imposee puis corriger plus loin."
        ],
        bullets: [
          "Observez les panneaux avant le carrefour, pas dans le carrefour.",
          "Placez-vous progressivement sur la bande adaptee.",
          "Ne coupez pas plusieurs bandes brutalement.",
          "La signalisation reelle prime sur le GPS."
        ]
      },
      {
        title: 'Sens interdits, sens uniques et obligations',
        image: '/images/img97.png',
        paragraphs: [
          "Un sens interdit interdit l'acces dans ce sens. Une direction obligatoire impose le mouvement indique. Une rue a sens unique reduit les conflits frontaux, mais n'exclut pas pietons, cyclistes, livraisons ou exceptions signalees.",
          "Les obligations existent pour organiser les flux et eviter les conflits. Elles ne sont pas de simples conseils."
        ],
        bullets: [
          "Ne vous engagez jamais dans un sens interdit.",
          "Suivez les panneaux ronds bleus d'obligation.",
          "Dans un sens unique, restez attentif aux cyclistes et sorties de parking.",
          "En zone de travaux, suivez la deviation temporaire."
        ]
      },
      {
        title: 'Ronds-points et trajectoires lisibles',
        image: '/images/img98.png',
        paragraphs: [
          "Dans un rond-point, on circule dans le sens indique autour de l'ilot central. Il faut garder une trajectoire lisible, signaler la sortie et ne pas surprendre les autres usagers.",
          "Les ronds-points peuvent comporter plusieurs bandes. Le placement depend de la signalisation locale et de la direction choisie."
        ],
        bullets: [
          "Ralentissez avant d'entrer.",
          "Cedez le passage selon la signalisation presente.",
          "Annoncez votre sortie avec le clignotant.",
          "Ne coupez pas brutalement la trajectoire d'un autre vehicule."
        ]
      },
      {
        title: 'Bifurcations, fin de bande et insertions',
        image: '/images/img99.png',
        paragraphs: [
          "Une fin de bande demande observation et insertion progressive. Forcer le passage sans clignotant ou s'arreter au mauvais endroit cree un danger.",
          "A une bifurcation ou sortie, preparez votre placement tot. Sur route rapide, les corrections tardives sont particulierement dangereuses."
        ],
        bullets: [
          "Controlez retroviseurs et angle mort avant insertion.",
          "Signalez assez tot votre intention.",
          "Adaptez votre vitesse au flux.",
          "Si la sortie est manquee, continuez jusqu'a une solution sure."
        ]
      }
    ],
    examTips: [
      "Le GPS ne remplace jamais la signalisation.",
      "Une erreur de voie se corrige plus loin, pas par une coupe dangereuse.",
      "Un rond-point demande une trajectoire stable et une sortie annoncee.",
      "Sens interdit et direction obligatoire sont des signaux forts."
    ],
    checklist: [
      'Je sais choisir ma bande avant le carrefour.',
      'Je respecte les sens interdits et obligations.',
      'Je sais circuler dans un rond-point sans couper les autres.',
      "Je sais m'inserer quand une bande se termine."
    ]
  },
  H: {
    readingTime: '35 min',
    level: 'Arret et stationnement',
    image: '/images/img70.png',
    intro:
      "S'arreter ou stationner mal peut masquer un pieton, bloquer une sortie, forcer des depassements dangereux ou creer une faute grave. Il faut distinguer immobilisation breve et stationnement durable.",
    objectives: [
      "Distinguer arret et stationnement.",
      'Connaitre les endroits ou ils sont interdits.',
      'Utiliser correctement le disque en zone bleue.',
      'Quitter une place sans surprendre les autres.'
    ],
    sections: [
      {
        title: 'Arret ou stationnement',
        image: '/images/img71.png',
        paragraphs: [
          "L'arret est une immobilisation breve pour charger, decharger ou laisser monter ou descendre une personne. Le stationnement est une immobilisation plus durable.",
          "Certaines zones interdisent le stationnement, d'autres interdisent meme l'arret. Les feux de detresse ne donnent pas une autorisation."
        ],
        bullets: [
          "Interdiction de stationner: l'arret bref peut encore etre autorise selon le cas.",
          "Interdiction d'arret: ni arret, ni stationnement.",
          "Zone bleue: disque visible et correctement regle.",
          "Respectez les horaires et panneaux additionnels."
        ]
      },
      {
        title: 'Endroits dangereux ou interdits',
        image: '/images/img72.png',
        paragraphs: [
          "Stationner trop pres d'un passage pieton, d'un carrefour, dans un virage ou devant un garage peut masquer la visibilite ou bloquer les usagers.",
          "Le stationnement en double file oblige les autres conducteurs a se deporter et peut provoquer un conflit avec les usagers venant en face."
        ],
        bullets: [
          "Ne bloquez pas une sortie de garage.",
          "Ne vous arretez pas sur un passage pieton ou une piste cyclable.",
          "Gardez les carrefours et virages degages.",
          "Laissez une largeur suffisante dans les rues etroites."
        ]
      },
      {
        title: 'Immobiliser correctement le vehicule',
        image: '/images/img73.png',
        paragraphs: [
          "Sur une pente, le vehicule doit etre immobilise efficacement. Le frein de stationnement et le bon placement evitent qu'il se deplace seul.",
          "Avant de quitter le vehicule, verifiez qu'il ne gene pas, que les feux necessaires sont eteints ou adaptes et que les portes ne creeront pas de danger."
        ],
        bullets: [
          "Serrez correctement le frein de stationnement.",
          "Surveillez les cyclistes avant d'ouvrir une portiere.",
          "Ne laissez pas un objet ou passager creer un risque.",
          "Ne comptez pas sur les warnings pour compenser un mauvais emplacement."
        ]
      },
      {
        title: 'Quitter une place',
        image: '/images/img74.png',
        paragraphs: [
          "Quitter un stationnement est une manoeuvre. Il faut observer, signaler, ceder le passage si necessaire et s'inserer sans surprendre.",
          "Le danger vient souvent de l'angle mort: cycliste, moto, trottinette ou voiture deja engagee."
        ],
        bullets: [
          "Regardez devant, derriere et dans l'angle mort.",
          "Mettez le clignotant seulement quand vous allez reellement sortir.",
          "Avancez progressivement.",
          "N'obligez pas les autres a freiner brutalement."
        ]
      }
    ],
    examTips: [
      "Warnings allumes ne veut pas dire stationnement autorise.",
      "Passage pieton, carrefour, virage et piste cyclable sont des zones sensibles.",
      "La zone bleue exige un disque correctement place.",
      "Ouvrir une portiere sans regarder peut mettre un cycliste en danger."
    ],
    checklist: [
      "Je distingue arret et stationnement.",
      "Je sais lire interdiction d'arret et interdiction de stationner.",
      "Je connais les endroits dangereux pour se garer.",
      "Je sais quitter une place en observant et signalant."
    ]
  },
  I: {
    readingTime: '38 min',
    level: 'Comportement responsable',
    image: '/images/img75.png',
    intro:
      "Ce chapitre regroupe les attitudes qui font la difference: alcool, drogues, fatigue, distraction, accident, conduite economique, pannes et conduite defensive.",
    objectives: [
      'Comprendre les effets de l alcool, drogues, fatigue et GSM.',
      'Savoir reagir apres un accident ou une panne.',
      'Adopter une conduite defensive et economique.',
      'Identifier les signaux techniques importants.'
    ],
    sections: [
      {
        title: 'Alcool, drogues, fatigue et distraction',
        image: '/images/img76.png',
        paragraphs: [
          "L'alcool et les drogues alterent perception, jugement, coordination et temps de reaction. La fatigue peut produire des effets comparables: baisse de vigilance, micro-sommeil et reactions tardives.",
          "Le telephone tenu en main ou l'attention detournee quelques secondes suffisent pour manquer un danger."
        ],
        bullets: [
          "Ne conduisez pas sous influence.",
          "Faites une pause avant que la fatigue ne devienne critique.",
          "Preparez GPS, musique et telephone avant de partir.",
          "Au feu vert, verifiez encore l'intersection au lieu de demarrer machinalement."
        ]
      },
      {
        title: 'Accident et panne',
        image: '/images/img77.png',
        paragraphs: [
          "Apres un accident, la priorite est d'eviter le suraccident: se mettre en securite, signaler, proteger les personnes, appeler les secours si necessaire et echanger les informations calmement.",
          "En cas de panne ou voyant critique, cherchez un endroit sur pour vous arreter. Sur route rapide, la bande d'arret d'urgence sert aux urgences, pas a une pause ordinaire."
        ],
        bullets: [
          "Allumez les feux de detresse si la situation le justifie.",
          "Ne restez pas dans une zone dangereuse.",
          "Gardez votre calme pour le constat et les informations.",
          "Ne repartez pas si le vehicule n'est plus sur."
        ]
      },
      {
        title: 'Conduite defensive',
        image: '/images/img78.png',
        paragraphs: [
          "Conduire defensivement, ce n'est pas rouler lentement partout. C'est prevoir les erreurs possibles, conserver des marges et chercher les dangers caches.",
          "En agglomeration, scannez les trottoirs, les passages pietons, les sorties de parking, les portes de voitures et les carrefours."
        ],
        bullets: [
          "Gardez une distance qui vous laisse une solution.",
          "Ne comptez pas uniquement sur votre priorite.",
          "Anticipez les erreurs des autres conducteurs.",
          "Adaptez votre vitesse avant que le danger soit devant vous."
        ]
      },
      {
        title: 'Eco-conduite et technique',
        image: '/images/img79.png',
        paragraphs: [
          "Une conduite souple reduit consommation, usure et stress. Anticiper les ralentissements evite d'accelerer fort puis freiner tard.",
          "Une consommation anormale, un bruit mecanique ou un voyant rouge peuvent annoncer un probleme. La reaction responsable est de verifier, pas d'ignorer."
        ],
        bullets: [
          "Accélérez progressivement.",
          "Maintenez une allure reguliere.",
          "Anticipez les feux et ralentissements.",
          "Prenez au serieux les voyants et bruits inhabituels."
        ]
      }
    ],
    examTips: [
      "La fatigue est traitee comme un vrai danger, pas comme un inconfort.",
      "Apres accident: proteger avant discuter.",
      "Une conduite defensive anticipe l'erreur des autres.",
      "Un voyant rouge demande une reaction rapide et sure."
    ],
    checklist: [
      "Je connais les effets de l'alcool, drogues, fatigue et GSM.",
      'Je sais securiser une panne ou un accident.',
      "Je pratique l'anticipation plutot que les reactions tardives.",
      'Je sais reconnaitre un probleme technique important.'
    ]
  },
  J: {
    readingTime: '50 min',
    level: 'Signalisation',
    image: '/images/img80.png',
    intro:
      "La signalisation est le langage de la route: formes, couleurs, panneaux de danger, interdiction, obligation, indication, zones et signalisation temporaire. Pour reussir, il faut comprendre la logique, pas memoriser seulement des images.",
    objectives: [
      'Classer les panneaux par forme et couleur.',
      'Comprendre zones, limitations, priorites et obligations.',
      'Lire les panneaux additionnels.',
      'Respecter la signalisation temporaire de chantier.'
    ],
    sections: [
      {
        title: 'Familles de panneaux',
        image: '/images/img83.png',
        paragraphs: [
          "Les panneaux triangulaires avertissent d'un danger. Les panneaux ronds rouges interdisent ou limitent. Les panneaux ronds bleus imposent une obligation. Les panneaux d'indication donnent une information utile ou un statut de voie.",
          "La forme donne deja une grande partie du sens. La couleur precise ensuite le type d'information."
        ],
        bullets: [
          "Triangle: danger a anticiper.",
          "Rond rouge: interdiction ou limitation.",
          "Rond bleu: obligation.",
          "Rectangle ou carre: indication, direction, zone ou service."
        ]
      },
      {
        title: 'Zones et vitesses',
        image: '/images/img84.png',
        paragraphs: [
          "Une zone 30 reste valable jusqu'au panneau de fin de zone. Une zone residentielle ou de rencontre demande une allure tres lente et une attention maximale aux pietons. Une zone cyclable limite la vitesse et protege les cyclistes.",
          "Un panneau de limitation fixe un maximum: 50, 70 ou autre. Il ne supprime pas l'obligation d'adapter l'allure."
        ],
        bullets: [
          "Zone residentielle/de rencontre: pietons tres proteges, allure tres lente.",
          "Zone 30: maximum 30 dans toute la zone.",
          "Zone cyclable: respect renforcé des cyclistes.",
          "Fin de limitation: retour aux regles generales du lieu."
        ]
      },
      {
        title: 'Priorite, interdictions et obligations',
        image: '/images/img85.png',
        paragraphs: [
          "STOP, cedez-le-passage, route prioritaire et fin de priorite organisent l'ordre de passage. Les interdictions comme sens interdit, acces interdit, depassement interdit ou arret interdit doivent etre respectees jusqu'a leur fin ou selon les panneaux additionnels.",
          "Les obligations de direction ou de piste cyclable imposent un comportement. Elles ne sont pas facultatives."
        ],
        bullets: [
          "STOP: arret complet obligatoire.",
          "Cedez: ne pas faire freiner l'usager prioritaire.",
          "Sens interdit: ne pas entrer dans ce sens.",
          "Obligation de direction: suivre la fleche indiquee."
        ]
      },
      {
        title: 'Panneaux additionnels et chantier',
        image: '/images/img88.png',
        paragraphs: [
          "Les panneaux additionnels limitent ou precisent la regle: horaires, categories de vehicules, distances, direction concernee, riverains, livraisons ou exceptions.",
          "En chantier, la signalisation temporaire orange et les cones peuvent modifier les bandes, priorites, vitesses et trajectoires. Elle doit etre respectee meme si les anciennes marques au sol restent visibles."
        ],
        bullets: [
          "Lisez le panneau principal puis le panneau additionnel.",
          "Verifiez si la regle vaut pour votre categorie de vehicule.",
          "En travaux, suivez les signaux temporaires.",
          "Ralentissez: l'environnement est modifie et moins previsible."
        ]
      }
    ],
    examTips: [
      "Commencez par la forme du panneau pour identifier la famille.",
      "Une zone vaut jusqu'au panneau de fin.",
      "La signalisation temporaire de chantier peut primer sur les marques habituelles.",
      "Les panneaux additionnels changent souvent la bonne reponse."
    ],
    checklist: [
      'Je distingue danger, interdiction, obligation et indication.',
      'Je sais lire une zone 30, zone residentielle et zone cyclable.',
      'Je connais stop, cedez-le-passage, route prioritaire et fin de priorite.',
      'Je lis toujours les panneaux additionnels.'
    ]
  },
  K: {
    readingTime: '45 min',
    level: 'Fautes graves',
    image: '/images/img100.png',
    intro:
      "Les fautes graves sont les comportements qui creent un risque direct ou violent: feu rouge, stop ignore, sens interdit, priorite refusee, vitesse excessive, depassement dangereux, GSM, alcool, passage a niveau ou autoroute mal utilisee.",
    objectives: [
      'Reconnaitre les fautes qui mettent immediatement en danger.',
      'Comprendre pourquoi elles sont graves.',
      'Eviter les pieges typiques de l examen.',
      'Relier faute grave et conduite defensive.'
    ],
    sections: [
      {
        title: 'Signalisation non respectee',
        image: '/images/img20.png',
        paragraphs: [
          "Franchir un feu rouge, ne pas marquer l'arret au STOP, entrer dans un sens interdit ou ignorer un agent qualifie sont des fautes graves car elles creent un conflit immediat avec les autres usagers.",
          "Une infraction peut sembler petite dans une rue calme, mais la regle protege une situation que vous ne voyez pas toujours."
        ],
        bullets: [
          "Feu rouge: arret obligatoire.",
          "STOP: arret complet, pas simple ralentissement.",
          "Sens interdit: risque de face-a-face.",
          "Agent qualifie: ses ordres priment."
        ]
      },
      {
        title: 'Priorites et usagers vulnerables',
        image: '/images/img21.png',
        paragraphs: [
          "Refuser la priorite de droite, couper la route en tournant a gauche, ne pas laisser passer un pieton engage ou un tram peut obliger l'autre usager a freiner, eviter ou subir un choc.",
          "Les pietons, cyclistes et enfants sont particulierement exposes. Une erreur de priorite envers eux est souvent tres grave."
        ],
        bullets: [
          "Passage pieton: ralentir et ceder si necessaire.",
          "Tram: trajectoire imposee et freinage long.",
          "Virage a gauche: ne coupez pas les usagers venant en face.",
          "Vehicule prioritaire: degagez le passage prudemment."
        ]
      },
      {
        title: 'Depassements et autoroute',
        image: '/images/img4.png',
        paragraphs: [
          "Depasser malgre une interdiction, franchir une ligne continue, depasser avant un passage pieton ou dans une zone sans visibilite sont des fautes graves parce que les autres usagers n'ont plus de marge.",
          "Sur autoroute, reculer, faire demi-tour, rouler en sens inverse ou utiliser la bande d'arret d'urgence sans necessite est extremement dangereux."
        ],
        bullets: [
          "Interdiction de depasser: respect total jusqu'a la fin.",
          "Ligne continue: ne pas franchir.",
          "Sortie manquee sur autoroute: continuez.",
          "Bande d'arret d'urgence: urgence uniquement."
        ]
      },
      {
        title: 'Vitesse, influence et distraction',
        image: '/images/img65.png',
        paragraphs: [
          "La vitesse excessive pres d'une ecole, en brouillard ou en zone dense reduit le temps de reaction et aggrave le choc. Conduire sous alcool, drogues ou fatigue diminue la capacite a decider et reagir.",
          "Le GSM tenu en main est dangereux car quelques secondes d'inattention suffisent pour parcourir plusieurs dizaines de metres sans controle reel."
        ],
        bullets: [
          "Adaptez la vitesse a la visibilite.",
          "Ne conduisez pas sous influence.",
          "Rangez le telephone avant de partir.",
          "Gardez une distance de securite, surtout quand le trafic varie."
        ]
      }
    ],
    examTips: [
      "Une faute grave est souvent liee a un risque immediat pour quelqu'un.",
      "Feu rouge, STOP, sens interdit, ligne continue et passage pieton sont prioritaires a maitriser.",
      "Sur autoroute, ne reculez jamais et ne faites jamais demi-tour.",
      "GSM, alcool, drogues et fatigue sont des causes directes d'echec et d'accident."
    ],
    checklist: [
      'Je sais reconnaitre les fautes graves de signalisation.',
      'Je sais pourquoi une erreur de priorite est dangereuse.',
      'Je connais les interdictions absolues sur autoroute.',
      'Je relie vitesse, influence et distraction au risque reel.'
    ]
  }
};

function getStudyChapter(code) {
  return studyChapters[code];
}

module.exports = {
  studyChapters,
  getStudyChapter
};
