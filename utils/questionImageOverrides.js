const imageOverrides = {
  1: {
    questionText: "Sur l'image, la voiture grise peut-elle depasser le cycliste ?",
    choiceA: "Oui, si la largeur et la visibilite sont suffisantes",
    choiceB: "Oui, dans tous les cas car le cycliste roule lentement",
    choiceC: "Non, un cycliste ne peut jamais etre depasse",
    correctChoice: "A",
    explanation: "En observant la scene, la manoeuvre n'est possible que si la voie est assez large et la vue suffisamment degagee.",
    prompt: "Illustration pedagogique realiste d'une route belge etroite a double sens, voiture grise derriere un cycliste, distance laterale visible, scene utile pour juger si le depassement est possible, format horizontal."
  },
  2: {
    questionText: "Sur ce marquage, pouvez-vous changer de bande avec la voiture noire ?",
    choiceA: "Oui, si je mets le clignotant",
    choiceB: "Non, la ligne continue l'interdit",
    choiceC: "Oui, seulement a faible vitesse",
    correctChoice: "B",
    explanation: "La ligne blanche continue visible sur l'image interdit de franchir le marquage, meme avec le clignotant.",
    prompt: "Scene routiere belge avec voiture noire sur une chaussee a plusieurs bandes separees par une ligne blanche continue bien visible, vue claire des marquages au sol, format horizontal, utile pour juger un changement de bande."
  },
  3: {
    questionText: "Le cycliste de l'image doit-il rouler sur la piste cyclable ?",
    choiceA: "Oui",
    choiceB: "Non, il peut rester au centre de la chaussee",
    choiceC: "Non, il doit prendre le trottoir",
    correctChoice: "A",
    explanation: "La piste cyclable visible sur l'image est prevue pour le cycliste. Il doit en principe l'utiliser.",
    prompt: "Illustration pedagogique d'une route belge avec piste cyclable clairement separee a droite, cycliste et voiture visibles, scene lisible pour determiner ou le cycliste doit circuler."
  },
  4: {
    questionText: "La voiture blanche qui vient de manquer la sortie peut-elle reculer ?",
    choiceA: "Oui, si la bande d'arret d'urgence est libre",
    choiceB: "Non, elle doit continuer jusqu'a la sortie suivante",
    choiceC: "Oui, si elle allume ses warnings",
    correctChoice: "B",
    explanation: "Sur autoroute, la scene montre qu'il faut poursuivre sa route. Reculer ou s'arreter sans necessite serait dangereux.",
    prompt: "Autoroute belge vue de jour, voiture blanche depassant une sortie ratee, panneaux et glissieres visibles, scene pedagogique claire montrant qu'elle doit continuer."
  },
  5: {
    questionText: "A l'entree de cette route, la voiture rouge peut-elle s'y engager ?",
    choiceA: "Oui, si c'est un vehicule autorise a circuler sur une route pour automobiles",
    choiceB: "Oui, quel que soit le vehicule",
    choiceC: "Non, aucune voiture ne peut y entrer",
    correctChoice: "A",
    explanation: "Le signal visible a l'entree indique une route reservee a certaines categories de vehicules motorises.",
    prompt: "Entree de route pour automobiles en Belgique avec panneau specifique bien visible, voiture rouge a l'approche, scene nette permettant de juger si l'acces est autorise."
  },
  6: {
    questionText: "Que doit faire le conducteur avant de franchir ce passage a niveau ?",
    choiceA: "Ralentir et verifier qu'aucun train n'arrive",
    choiceB: "Accelerer pour passer plus vite",
    choiceC: "Klaxonner puis continuer",
    correctChoice: "A",
    explanation: "Le passage a niveau sans barriere visible sur l'image impose une approche prudente et une verification attentive.",
    prompt: "Passage a niveau sans barriere sur route belge, voiture approchant les rails, bonne visibilite laterale, scene pedagogique utile pour decider la conduite a adopter."
  },
  7: {
    questionText: "Sur cette chaussée mouillee, que doit anticiper le conducteur ?",
    choiceA: "Une adherence reduite et un freinage plus long",
    choiceB: "Une distance d'arret plus courte",
    choiceC: "L'absence de danger si la route est droite",
    correctChoice: "A",
    explanation: "La route humide visible sur l'image peut allonger le freinage. Le conducteur doit adapter sa vitesse.",
    prompt: "Route belge mouillee apres la pluie, voiture en mouvement, reflets sur la chaussee, scene claire montrant une adherence reduite et utile pour une question de securite."
  },
  8: {
    questionText: "Dans cette rue, que doit faire la voiture devant l'obstacle ?",
    choiceA: "Ralentir et laisser passer si necessaire",
    choiceB: "Passer en forçant le croisement",
    choiceC: "Monter sur le trottoir",
    correctChoice: "A",
    explanation: "L'obstacle visible reduit l'espace disponible. Il faut ralentir et evaluer si l'autre usager doit passer d'abord.",
    prompt: "Rue belge avec obstacle fixe ou voiture stationnee reduisant une voie, voiture en approche et autre usager en face, scene pedagogique claire pour juger la priorite pratique."
  },
  21: {
    questionText: "Le conducteur doit-il laisser traverser le pieton visible sur le passage ?",
    choiceA: "Oui",
    choiceB: "Non, s'il pense passer avant lui",
    choiceC: "Seulement si le pieton court",
    correctChoice: "A",
    explanation: "Le pieton est deja engage sur le passage. Le conducteur doit lui ceder le passage.",
    prompt: "Passage pieton en Belgique, pieton engage sur les bandes blanches, voiture proche mais arretee ou ralentissant, scene utile pour juger la priorite au passage pieton."
  },
  22: {
    questionText: "Que doit anticiper la voiture en depassant cet arret de bus ?",
    choiceA: "Un pieton qui peut surgir devant ou derriere le bus",
    choiceB: "Un feu vert obligatoire",
    choiceC: "Un stationnement autorise",
    correctChoice: "A",
    explanation: "Le bus masque une partie de la vue. Un pieton peut apparaitre subitement.",
    prompt: "Arret de bus belge avec autobus a l'arret, voiture arrivant a proximite, pieton partiellement masque, scene pedagogique pour evaluer le danger visuel."
  },
  23: {
    questionText: "Sur l'image, pourquoi la voiture garde-t-elle ses distances derriere la moto ?",
    choiceA: "Parce que le motard peut eviter un danger ou se deporter",
    choiceB: "Parce que le motard a toujours la priorite",
    choiceC: "Parce que depasser une moto est interdit",
    correctChoice: "A",
    explanation: "La position de la moto dans sa bande peut annoncer un evitement ou une adaptation de trajectoire.",
    prompt: "Moto sur route belge legerement decalee dans sa voie, voiture suivant a bonne distance, scene claire pour comprendre pourquoi il faut anticiper un ecart."
  },
  24: {
    questionText: "En voyant cet enfant pres du bord de la chaussee, que devez-vous faire ?",
    choiceA: "Ralentir et prevoir une reaction brusque",
    choiceB: "Garder l'allure si le trottoir est libre",
    choiceC: "Klaxonner et continuer",
    correctChoice: "A",
    explanation: "L'enfant visible sur la scene peut traverser sans prevenir. Il faut reduire la vitesse et rester pret a freiner.",
    prompt: "Enfant pres du bord de la chaussee en Belgique, voiture approchant prudemment, environnement urbain simple et scene utile pour juger l'attitude du conducteur."
  },
  25: {
    questionText: "Le cycliste de l'image tend le bras a gauche. Que signale-t-il ?",
    choiceA: "Qu'il veut tourner ou se deporter a gauche",
    choiceB: "Qu'il vous laisse passer",
    choiceC: "Qu'il s'arrete en urgence",
    correctChoice: "A",
    explanation: "Le bras tendu annonce clairement une intention de direction ou de deport.",
    prompt: "Cycliste belge tendant le bras a gauche avant un carrefour ou un changement de trajectoire, voiture en retrait, scene pedagogique nette."
  },
  26: {
    questionText: "Face a cette voiture lente en ville, quelle attitude est correcte ?",
    choiceA: "Patienter et depasser seulement si c'est autorise et sur",
    choiceB: "Se coller au vehicule pour le faire accelerer",
    choiceC: "Klaxonner jusqu'a ce qu'il change de voie",
    correctChoice: "A",
    explanation: "La scene ne justifie pas une pression sur le conducteur devant. Il faut garder de l'espace et patienter.",
    prompt: "Rue urbaine belge, voiture lente devant, autre voiture gardant une distance correcte, scene visuelle utile pour choisir une conduite defensive."
  },
  27: {
    questionText: "La voiture peut-elle serrer ce cyclomoteur pendant le depassement ?",
    choiceA: "Non, elle doit laisser un large espace lateral",
    choiceB: "Oui, si elle depasse rapidement",
    choiceC: "Oui, uniquement en ville",
    correctChoice: "A",
    explanation: "Le cyclomoteur visible sur l'image peut etre destabilise par un ecart ou le souffle du vehicule.",
    prompt: "Voiture depassant un cyclomoteur sur route belge avec notion claire d'espace lateral, scene pedagogique permettant de juger la distance de securite."
  },
  28: {
    questionText: "En voyant l'ambulance arriver, que doit faire l'automobiliste ?",
    choiceA: "Degager le passage des que possible sans créer de danger",
    choiceB: "Freiner brusquement au milieu de la voie",
    choiceC: "Accelerer pour passer le carrefour avant elle",
    correctChoice: "A",
    explanation: "Les usagers doivent faciliter le passage des secours, mais sans provoquer un nouvel accident.",
    prompt: "Ambulance avec signaux prioritaires sur route belge, voitures se rangeant prudemment, scene claire et exploitable pedagogiquement."
  },
  41: {
    questionText: "En observant ce chargement, la voiture respecte-t-elle la charge autorisee ?",
    choiceA: "Oui, si la masse maximale autorisee n'est pas depassee",
    choiceB: "Oui, parce que le coffre ferme toujours sans risque",
    choiceC: "Non, la M.M.A. n'a pas d'importance",
    correctChoice: "A",
    explanation: "La scene invite a evaluer le chargement en lien avec la masse maximale autorisee du vehicule.",
    prompt: "Voiture belge avec bagages et chargement visible, scene pedagogique claire pour une question sur la masse maximale autorisee et le chargement."
  },
  42: {
    questionText: "Le chargement visible dans ce coffre est-il correctement reparti ?",
    choiceA: "Oui, s'il reste stable et bien equilibre",
    choiceB: "Peu importe, seule la fermeture du coffre compte",
    choiceC: "Non, il doit toujours etre place uniquement a l'arriere",
    correctChoice: "A",
    explanation: "Un chargement bien reparti aide a conserver la stabilite et un freinage correct.",
    prompt: "Coffre de voiture bien organise, bagages repartis de facon stable, scene claire pour evaluer l'equilibre du chargement."
  },
  43: {
    questionText: "Le chargement qui depasse a l'arriere pose-t-il probleme dans cette situation ?",
    choiceA: "Oui, il peut etre dangereux et non conforme",
    choiceB: "Non, si les feux sont allumes",
    choiceC: "Non, s'il ne depasse que la nuit",
    correctChoice: "A",
    explanation: "Le depassement visible a l'arriere peut mettre en danger les autres usagers.",
    prompt: "Voiture avec chargement depassant nettement a l'arriere sur route belge, scene pedagogique permettant de juger si la situation est reguliere."
  },
  44: {
    questionText: "Dans cette scene de nuit, quel eclairage la voiture utilise-t-elle correctement ?",
    choiceA: "Les feux de croisement",
    choiceB: "Les feux stop",
    choiceC: "Les warnings",
    correctChoice: "A",
    explanation: "Les feux de croisement visibles permettent de voir et d'etre vu sans eblouir excessivement.",
    prompt: "Route belge de nuit, voiture avec feux de croisement allumes, eclairage de la scene lisible, utile pour identifier le bon type de feux."
  },
  45: {
    questionText: "La voiture de l'image doit-elle garder ses feux de route ?",
    choiceA: "Non, si elle risque d'eblouir l'usager en face",
    choiceB: "Oui, toujours de nuit",
    choiceC: "Oui, si la route est seche",
    correctChoice: "A",
    explanation: "Quand un autre usager est visible en face, il faut eviter de l'eblouir.",
    prompt: "Deux voitures se croisant de nuit sur route belge, l'une avec faisceau puissant qui devrait etre baisse, scene pedagogique claire."
  },
  46: {
    questionText: "En regardant ce pneu, que faut-il surtout verifier ?",
    choiceA: "La pression et l'usure",
    choiceB: "Seulement la couleur du flanc",
    choiceC: "La hauteur du siege conducteur",
    correctChoice: "A",
    explanation: "L'etat du pneu visible sur l'image influence directement l'adherence et la securite.",
    prompt: "Gros plan pedagogique d'un pneu de voiture montrant sculpture et controle de pression, scene nette exploitable pour une question technique."
  },
  47: {
    questionText: "Cette voiture tres chargee freinera-t-elle comme d'habitude ?",
    choiceA: "Non, le freinage peut etre moins efficace",
    choiceB: "Oui, le chargement n'a aucun effet",
    choiceC: "Oui, si le coffre est ferme",
    correctChoice: "A",
    explanation: "La surcharge visible sur la scene peut allonger le freinage et degrader la tenue de route.",
    prompt: "Voiture chargee lourdement, arriere un peu affaisse, scene routiere belge utile pour juger l'effet du poids sur le freinage."
  },
  48: {
    questionText: "Que signalent les feux rouges allumes a l'arriere de cette voiture ?",
    choiceA: "Un ralentissement ou un freinage",
    choiceB: "Un changement de direction",
    choiceC: "Un feu de route",
    correctChoice: "A",
    explanation: "Les feux stop visibles avertissent les usagers qui suivent que le vehicule ralentit ou freine.",
    prompt: "Arriere de voiture dans le trafic belge avec feux stop allumes, conducteur suivant visible, scene pedagogique claire."
  },
  61: {
    questionText: "Avant ce passage pieton, que doit faire la voiture ?",
    choiceA: "Reduire sa vitesse pour pouvoir s'arreter a temps",
    choiceB: "Accelerer si personne n'est encore sur les bandes",
    choiceC: "Garder exactement la meme allure",
    correctChoice: "A",
    explanation: "Le passage pieton visible sur l'image demande une vitesse permettant de reagir immediatement.",
    prompt: "Passage pieton belge bien visible, voiture en approche, environnement urbain avec risque de traversee, scene utile pour juger l'allure adaptee."
  },
  62: {
    questionText: "Sur cette scene de freinage, de quoi se compose la distance d'arret ?",
    choiceA: "De la reaction puis du freinage",
    choiceB: "Seulement de la distance visible",
    choiceC: "Seulement de la vitesse maximale",
    correctChoice: "A",
    explanation: "L'image montre l'idee d'une reaction du conducteur suivie du freinage du vehicule.",
    prompt: "Illustration pedagogique avec voiture, obstacle devant, zone de reaction puis zone de freinage suggerees visuellement, sans texte parasite."
  },
  63: {
    questionText: "Sur cette route glissante, que doit prevoir le conducteur ?",
    choiceA: "Une distance de freinage plus longue",
    choiceB: "Une meilleure adherence",
    choiceC: "Une route sans risque si elle est droite",
    correctChoice: "A",
    explanation: "La chaussee glissante visible sur l'image impose plus de prudence et une distance d'arret plus grande.",
    prompt: "Route belge humide ou glissante, voiture freinant, sensation d'adherence reduite, scene pedagogique claire pour question sur la distance de freinage."
  },
  64: {
    questionText: "A quelle allure devez-vous circuler dans cette zone 30 ?",
    choiceA: "Au maximum a 30 km/h",
    choiceB: "A 50 km/h si la rue semble vide",
    choiceC: "A la vitesse que permet la largeur de la route",
    correctChoice: "A",
    explanation: "Le panneau visible impose une limitation maximale. La voie parait peut-etre large, mais la regle reste la meme.",
    prompt: "Rue residentielle belge avec panneau zone 30 tres visible, voiture entrant dans la zone, scene nette utile pour identifier la vitesse maximale."
  },
  65: {
    questionText: "Avec ce brouillard, que doit faire le conducteur ?",
    choiceA: "Rouler plus lentement en tenant compte de la visibilite reduite",
    choiceB: "Conserver sa vitesse habituelle si la route est droite",
    choiceC: "Se fier seulement aux lignes au sol",
    correctChoice: "A",
    explanation: "Le brouillard visible sur l'image raccourcit la distance de perception. Il faut donc lever le pied.",
    prompt: "Route belge avec brouillard dense, voiture visible dans une scene a faible visibilite, utile pour juger l'adaptation de vitesse."
  },
  66: {
    questionText: "Entre ces deux situations, quel vehicule mettra le plus de temps a s'arreter ?",
    choiceA: "Celui qui roule le plus vite",
    choiceB: "Celui qui roule le moins vite",
    choiceC: "Ils s'arreteront pareil",
    correctChoice: "A",
    explanation: "La scene compare deux allures. Plus la vitesse est elevee, plus la distance de freinage augmente.",
    prompt: "Illustration pedagogique comparant deux voitures a des vitesses differentes sur route belge, distances de freinage visuellement suggerees."
  },
  67: {
    questionText: "La distance entre ces deux voitures est-elle suffisante ?",
    choiceA: "Oui, si elle laisse le temps de reagir et freiner",
    choiceB: "Oui, meme si le pare-chocs est tres proche",
    choiceC: "Non, une distance n'est jamais utile en ville",
    correctChoice: "A",
    explanation: "En observant l'espace entre les vehicules, le principe reste de conserver une marge de reaction.",
    prompt: "Deux voitures sur route belge avec distance de securite visible entre elles, scene claire utile pour une question sur l'espacement."
  },
  68: {
    questionText: "Sur cette route degagee, devez-vous obligatoirement atteindre la vitesse maximale autorisee ?",
    choiceA: "Non, c'est une limite et pas une obligation",
    choiceB: "Oui, sinon vous genez toujours la circulation",
    choiceC: "Oui, quand la chaussee est seche",
    correctChoice: "A",
    explanation: "La scene peut sembler facile, mais la vitesse maximale autorisee reste une limite, pas une cible imposée.",
    prompt: "Route belge degagee et seche, voiture a allure moderee, panneau de limitation visible, scene pedagogique utile pour distinguer limite et obligation."
  },
  81: {
    questionText: "Dans cette rue etroite, comment les deux voitures doivent-elles se croiser ?",
    choiceA: "En ralentissant et en partageant l'espace prudemment",
    choiceB: "En accelerant pour passer la premiere",
    choiceC: "En utilisant le trottoir si besoin",
    correctChoice: "A",
    explanation: "Le croisement visible sur l'image demande une adaptation de vitesse et une bonne cooperation.",
    prompt: "Rue belge etroite avec deux voitures se faisant face, espace reduit, scene utile pour juger le bon comportement de croisement."
  },
  82: {
    questionText: "La voiture blanche peut-elle depasser dans cette situation ?",
    choiceA: "Oui, par la gauche si la manoeuvre est autorisee et sure",
    choiceB: "Oui, par la droite en restant proche du bord",
    choiceC: "Non, parce qu'on depasse normalement par la droite",
    correctChoice: "A",
    explanation: "Dans la circulation ordinaire, le depassement se fait par la gauche lorsqu'il est permis et sans danger.",
    prompt: "Route belge a double sens, voiture blanche derriere un autre vehicule avec configuration permettant un depassement par la gauche, scene pedagogique claire."
  },
  83: {
    questionText: "En voyant cette ligne continue, pouvez-vous depasser ?",
    choiceA: "Non",
    choiceB: "Oui, si personne n'arrive",
    choiceC: "Oui, si le vehicule devant est lent",
    correctChoice: "A",
    explanation: "La ligne continue visible rend le depassement interdit dans cette situation.",
    prompt: "Route belge avec ligne blanche continue et voiture suivant un autre vehicule, scene nette utile pour savoir si le depassement est autorise."
  },
  84: {
    questionText: "Que doit verifier le conducteur avant de se deporter pour depasser ?",
    choiceA: "Qu'aucun autre usager ne le depasse deja",
    choiceB: "Seulement la couleur du vehicule devant",
    choiceC: "Uniquement le bord droit de la route",
    correctChoice: "A",
    explanation: "Avant la manoeuvre, il faut observer l'arriere et l'angle mort pour ne pas couper la route a un autre usager.",
    prompt: "Vue interieure de conduite avec retroviseurs et circulation arriere visibles, voiture se preparant a depasser sur route belge."
  },
  85: {
    questionText: "Pouvez-vous depasser juste avant ce passage pieton ?",
    choiceA: "Non, la situation est dangereuse",
    choiceB: "Oui, si le passage semble libre",
    choiceC: "Oui, seulement en ville",
    correctChoice: "A",
    explanation: "Le vehicule devant pourrait masquer un pieton engage ou sur le point de traverser.",
    prompt: "Passage pieton belge a l'approche, deux voitures dans le meme sens, pieton potentiellement masque, scene pedagogique claire."
  },
  86: {
    questionText: "La voiture peut-elle depasser ce cycliste sur cette route ?",
    choiceA: "Oui, seulement si l'espace lateral et la visibilite sont suffisants",
    choiceB: "Oui, en restant tres pres pour gagner du temps",
    choiceC: "Non, un cycliste ne peut jamais etre depasse",
    correctChoice: "A",
    explanation: "La scene montre qu'il faut evaluer l'espace lateral et la vue avant toute manoeuvre.",
    prompt: "Voiture derriere un cycliste sur route belge, espace lateral visible, scene pedagogique pour juger si le depassement est possible."
  },
  87: {
    questionText: "Le vehicule avec clignotant a gauche peut-il etre depasse sans precaution ?",
    choiceA: "Non, sa manoeuvre doit etre anticipee",
    choiceB: "Oui, toujours par la gauche",
    choiceC: "Oui, s'il ralentit",
    correctChoice: "A",
    explanation: "Le clignotant visible annonce une intention. Il faut eviter un depassement dangereux.",
    prompt: "Carrefour belge avec voiture devant clignotant a gauche, autre voiture derriere, scene utile pour juger le risque de depassement."
  },
  88: {
    questionText: "Dans ce virage, la voiture noire peut-elle depasser ?",
    choiceA: "Non, la visibilite est insuffisante",
    choiceB: "Oui, si elle connait bien la route",
    choiceC: "Oui, si la route est seche",
    correctChoice: "A",
    explanation: "Le virage visible masque la vue sur la voie opposee. Le depassement serait dangereux.",
    prompt: "Virage sur route belge avec visibilite reduite, voiture noire derriere un autre vehicule, scene pedagogique claire pour juger un depassement."
  },
  101: {
    questionText: "La voiture grise peut-elle s'engager dans ce carrefour dirige par l'agent ?",
    choiceA: "Oui, si elle voit l'agent de profil",
    choiceB: "Non, car le feu derriere lui est rouge",
    choiceC: "Non, un agent ne change rien",
    correctChoice: "A",
    explanation: "Comme dans les situations classiques avec agent qualifie, la position de profil autorise le passage, meme si un feu rouge est visible.",
    prompt: "Carrefour urbain belge avec agent qualifie de profil au centre, voiture grise en approche, feu de circulation secondaire visible, scene pedagogique nette basee sur l'image."
  },
  102: {
    questionText: "Avec cet agent qualifie de profil, que peut faire la voiture noire ?",
    choiceA: "Aller tout droit, tourner a gauche ou a droite",
    choiceB: "Seulement continuer tout droit",
    choiceC: "Elle doit s'arreter",
    correctChoice: "A",
    explanation: "L'agent vu de profil equivaut a une autorisation de passage dans les directions autorisees par la chaussée.",
    prompt: "Carrefour belge avec agent qualifie de profil et voiture noire a l'arret avant l'intersection, scene tres lisible pour juger les mouvements autorises."
  },
  103: {
    questionText: "L'agent sur l'image utilise son sifflet. Que devez-vous comprendre ?",
    choiceA: "Il attire votre attention",
    choiceB: "Tout le monde doit s'arreter immediatement",
    choiceC: "Vous devez klaxonner en retour",
    correctChoice: "A",
    explanation: "Le sifflet sert avant tout a attirer l'attention des usagers sur une injonction ou un danger.",
    prompt: "Agent qualifie dans un carrefour belge portant un sifflet a la bouche, circulation autour de lui, scene pedagogique claire pour comprendre le role du sifflet."
  },
  104: {
    questionText: "Avec le bras leve verticalement, la voiture blanche peut-elle encore entrer dans le carrefour ?",
    choiceA: "Non",
    choiceB: "Oui, si elle tourne a droite",
    choiceC: "Oui, si la voie est libre",
    correctChoice: "A",
    explanation: "Le bras leve visible sur l'image signifie l'arret des usagers qui ne sont pas encore engages.",
    prompt: "Carrefour belge avec agent qualifie au centre, un bras leve verticalement, voiture blanche avant la ligne d'intersection, scene pedagogique exploitable."
  },
  105: {
    questionText: "Dans cette scene, le conducteur doit-il respecter le panneau STOP ou l'agent ?",
    choiceA: "L'agent qualifie",
    choiceB: "Le panneau STOP",
    choiceC: "Les deux en meme temps avec arret obligatoire",
    correctChoice: "A",
    explanation: "Les injonctions de l'agent qualifie prevalaient sur la signalisation fixe. La scene demande donc d'observer l'agent.",
    prompt: "Carrefour belge avec agent qualifie autorisant le passage et panneau STOP visible sur le cote, voiture en approche, scene claire basee sur l'image."
  },
  106: {
    questionText: "Dans cette situation, quels usagers doivent s'arreter a l'injonction de l'agent ?",
    choiceA: "Tous ceux qui ne sont pas deja engages",
    choiceB: "Seulement les voitures",
    choiceC: "Seulement les pietons",
    correctChoice: "A",
    explanation: "L'injonction de l'agent concerne l'ensemble des usagers concernes par la scene, pas uniquement les voitures.",
    prompt: "Grand carrefour belge avec agent qualifie bras leve, pietons, cycliste, voitures et tram visibles, scene pedagogique tres lisible."
  },
  107: {
    questionText: "Le cycliste de l'image peut-il continuer tout droit ?",
    choiceA: "Oui, car il voit l'agent de profil",
    choiceB: "Non, un cycliste doit toujours s'arreter devant l'agent",
    choiceC: "Non, seulement les voitures peuvent passer",
    correctChoice: "A",
    explanation: "La position de l'agent par rapport au cycliste autorise le passage.",
    prompt: "Cycliste a une intersection belge face a un agent qualifie vu de profil, scene claire basee sur l'image pour juger s'il peut continuer."
  },
  108: {
    questionText: "L'usager deja engage dans le carrefour doit-il s'arreter quand l'agent leve le bras ?",
    choiceA: "Non, il doit d'abord degager le carrefour",
    choiceB: "Oui, immediatement au milieu",
    choiceC: "Oui, seulement s'il tourne a gauche",
    correctChoice: "A",
    explanation: "Le bras leve impose l'arret aux usagers non engages, mais ceux deja dans le carrefour doivent le quitter rapidement.",
    prompt: "Carrefour belge avec agent qualifie bras leve et un vehicule deja engage dans l'intersection, scene pedagogique claire montrant qu'il doit degager le carrefour."
  },
  121: {
    questionText: "La voiture peut-elle entrer dans cette rue ?",
    choiceA: "Non, le sens interdit l'interdit",
    choiceB: "Oui, sur une courte distance",
    choiceC: "Oui, si aucun vehicule n'arrive",
    correctChoice: "A",
    explanation: "Le panneau visible a l'entree de la rue interdit de s'y engager dans ce sens.",
    prompt: "Entree de rue belge avec panneau sens interdit bien visible et voiture a l'approche, scene nette basee sur l'image."
  },
  122: {
    questionText: "A ce carrefour, quelle direction la voiture doit-elle suivre ?",
    choiceA: "La direction imposee par le panneau",
    choiceB: "N'importe laquelle si la voie est libre",
    choiceC: "Toujours tout droit",
    correctChoice: "A",
    explanation: "Le panneau de direction obligatoire visible structure le mouvement des vehicules.",
    prompt: "Carrefour belge avec panneau de direction obligatoire clairement visible et voiture en approche, scene pedagogique utile pour identifier la manoeuvre imposee."
  },
  123: {
    questionText: "Dans ce rond-point, dans quel sens faut-il circuler ?",
    choiceA: "Dans le sens indique autour de l'ilot central",
    choiceB: "Dans n'importe quel sens si c'est degage",
    choiceC: "En traversant l'ilot",
    correctChoice: "A",
    explanation: "Le sens de circulation du rond-point est lisible sur la scene et doit etre respecte.",
    prompt: "Rond-point belge avec ilot central et voiture engagée dans le bon sens de circulation, scene claire et pedagogique."
  },
  124: {
    questionText: "La voiture est-elle bien placee pour la direction choisie ?",
    choiceA: "Oui, si elle suit la bande reservee a sa manoeuvre",
    choiceB: "Oui, peu importe la bande",
    choiceC: "Non, les fleches au sol n'ont pas de valeur",
    correctChoice: "A",
    explanation: "La bonne bande se choisit en observant les fleches et panneaux visibles sur la scene.",
    prompt: "Chaussée belge avec fleches directionnelles au sol et plusieurs bandes, voiture correctement alignee sur la bonne voie."
  },
  125: {
    questionText: "Dans cette rue a sens unique, la voiture circule-t-elle correctement ?",
    choiceA: "Oui, si elle suit le sens autorise",
    choiceB: "Oui, meme en sens inverse si la rue est vide",
    choiceC: "Non, une rue a sens unique est reservee aux bus",
    correctChoice: "A",
    explanation: "La scene montre une circulation organisee dans un seul sens. Il faut la respecter.",
    prompt: "Rue belge a sens unique avec panneaux adequats et voiture circulant dans le bon sens, scene pedagogique simple."
  },
  126: {
    questionText: "Pourquoi le conducteur regarde-t-il la signalisation au-dessus des bandes ?",
    choiceA: "Parce qu'elle peut imposer une direction differente selon la voie",
    choiceB: "Parce qu'elle remplace les feux",
    choiceC: "Parce qu'elle n'est utile qu'aux camions",
    correctChoice: "A",
    explanation: "Les indications de bande visibles sur la scene guident le bon placement avant l'intersection.",
    prompt: "Grande intersection belge avec panneaux de direction au-dessus des bandes, voiture choisissant sa voie, scene pedagogique nette."
  },
  127: {
    questionText: "En voyant cette rue en sens interdit, que doit faire le conducteur ?",
    choiceA: "Chercher un autre itineraire",
    choiceB: "S'y engager si personne n'arrive",
    choiceC: "Reculer dedans prudemment",
    correctChoice: "A",
    explanation: "Le sens interdit visible interdit tout engagement dans cette direction.",
    prompt: "Rue belge avec sens interdit tres visible, voiture devant l'entree et trafic potentiel venant en face, scene pedagogique."
  },
  128: {
    questionText: "La voiture est-elle correctement positionnee pour tourner a droite ici ?",
    choiceA: "Oui, si elle s'est placee a temps sur la bande adaptee",
    choiceB: "Oui, meme depuis la gauche",
    choiceC: "Non, il faut toujours tourner a droite depuis le centre",
    correctChoice: "A",
    explanation: "Le bon placement avant le carrefour rend la manoeuvre plus sure et plus lisible.",
    prompt: "Carrefour belge, voiture correctement placee a droite avant de tourner, marquages et bord de route bien visibles."
  },
  141: {
    questionText: "Le vehicule visible est-il a l'arret ou en stationnement ?",
    choiceA: "En stationnement s'il reste immobilise durablement",
    choiceB: "Toujours a l'arret si le moteur tourne",
    choiceC: "Ni l'un ni l'autre",
    correctChoice: "A",
    explanation: "La scene illustre la difference entre un arret bref et un stationnement plus durable.",
    prompt: "Rue belge avec une voiture immobilisee plus durablement pres du trottoir et contexte permettant de comprendre la notion de stationnement."
  },
  142: {
    questionText: "Ce stationnement devant le garage est-il autorise ?",
    choiceA: "Non",
    choiceB: "Oui, si le conducteur reste dans la voiture",
    choiceC: "Oui, pour quelques minutes seulement",
    correctChoice: "A",
    explanation: "L'acces visible au garage ne doit pas etre bloque par un vehicule stationne.",
    prompt: "Facade de garage en Belgique avec voiture stationnee devant l'entree, scene pedagogique claire pour juger la legalite du stationnement."
  },
  143: {
    questionText: "Peut-on s'arreter dans cette zone ?",
    choiceA: "Non, si la signalisation interdit meme l'arret",
    choiceB: "Oui, avec les warnings",
    choiceC: "Oui, si l'on reste au volant",
    correctChoice: "A",
    explanation: "La signalisation visible peut interdire toute immobilisation, meme breve.",
    prompt: "Panneau belge d'interdiction d'arret clairement visible, voiture hesitante a se ranger, scene pedagogique utile."
  },
  144: {
    questionText: "Dans cette zone bleue, que doit afficher le conducteur ?",
    choiceA: "Le disque de stationnement regle correctement",
    choiceB: "Seulement les warnings",
    choiceC: "Un papier avec l'heure ecrite a la main",
    correctChoice: "A",
    explanation: "Le disque visible est l'element demande pour justifier l'heure d'arrivee en zone bleue.",
    prompt: "Voiture stationnee en zone bleue belge avec panneau et disque de stationnement visible sur le tableau de bord, scene pedagogique."
  },
  145: {
    questionText: "Ce stationnement pres du passage pieton est-il acceptable ?",
    choiceA: "Non, il masque la visibilite",
    choiceB: "Oui, si la voiture est petite",
    choiceC: "Oui, uniquement la nuit",
    correctChoice: "A",
    explanation: "Le vehicule visible cache une partie du passage et peut empecher de voir un pieton.",
    prompt: "Voiture stationnee tres pres d'un passage pieton en Belgique, bandes visibles, visibilite masque, scene utile pour juger le danger."
  },
  146: {
    questionText: "La voiture en double file est-elle bien arretee ?",
    choiceA: "Non, elle gene fortement la circulation",
    choiceB: "Oui, si le conducteur allume ses warnings",
    choiceC: "Oui, si c'est bref",
    correctChoice: "A",
    explanation: "Le double file visible oblige les autres usagers a contourner le vehicule dans de mauvaises conditions.",
    prompt: "Rue belge avec voiture en double file et circulation contournee, scene pedagogique claire sur la gene occasionnee."
  },
  147: {
    questionText: "Sur cette pente, quelle precaution manque si la voiture n'est pas bien immobilisee ?",
    choiceA: "Le frein de stationnement doit etre serre correctement",
    choiceB: "Le klaxon doit rester enclenche",
    choiceC: "Les feux de croisement doivent etre allumes",
    correctChoice: "A",
    explanation: "Sur pente, la scene rappelle qu'une mauvaise immobilisation peut faire bouger le vehicule seul.",
    prompt: "Voiture garee en pente dans une rue belge, situation montrant l'importance du frein de stationnement, rendu pedagogique."
  },
  148: {
    questionText: "Ce stationnement pres du carrefour est-il prudent ?",
    choiceA: "Non, il peut nuire a la visibilite des usagers",
    choiceB: "Oui, si la rue est calme",
    choiceC: "Oui, si l'on reste moins de cinq minutes",
    correctChoice: "A",
    explanation: "Un vehicule trop proche d'une intersection masque les vues et complique les manoeuvres.",
    prompt: "Intersection belge avec voiture garee trop pres de l'angle, vue masquee pour les autres usagers, scene pedagogique claire."
  }
};

module.exports = {
  imageOverrides
};
