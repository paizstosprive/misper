const { CHAPTERS } = require('./constants');
const { extraBank } = require('./questionSeedExtras');
const { imageOverrides } = require('./questionImageOverrides');

const bank = {
  A: [
    ["Avant de dépasser un cycliste sur chaussée étroite, que vérifier d'abord ?", "La largeur disponible et la visibilité", "Que le cycliste roule lentement", "Que les feux soient allumés", "A", "La sécurité dépend de l'espace et de la visibilité.", "Chaussée belge étroite, voiture derrière un cycliste, scène réaliste et claire."],
    ["Que signifie une ligne blanche continue entre bandes ?", "On ne peut pas la franchir sauf exception légale", "Le changement de bande est libre", "La vitesse y baisse automatiquement", "A", "Une ligne continue interdit en principe le franchissement.", "Route belge avec ligne continue entre bandes, voiture restant sur sa voie."],
    ["Avec une piste cyclable obligatoire, où circule en principe le cycliste ?", "Sur la piste cyclable", "Sur le trottoir", "Au milieu de la chaussée", "A", "La piste obligatoire doit en principe être utilisée.", "Route belge avec piste cyclable séparée, cycliste sur la piste."],
    ["Si vous manquez une sortie d'autoroute, que faire ?", "Continuer jusqu'à la sortie suivante", "Reculer sur la bande d'arrêt d'urgence", "S'arrêter pour réfléchir", "A", "Sur autoroute, on ne recule pas et on ne s'arrête pas sans nécessité.", "Autoroute belge, voiture dépassant une sortie et continuant."],
    ["Une route pour automobiles est surtout réservée à :", "Des véhicules capables d'y circuler rapidement", "Tous les usagers y compris cyclistes", "Des véhicules en stationnement", "A", "L'accès est limité à certaines catégories de véhicules.", "Entrée de route pour automobiles en Belgique, circulation de voitures."],
    ["À un passage à niveau sans barrière, quelle attitude adopter ?", "Ralentir et vérifier l'absence de train", "Accélérer pour passer vite", "Klaxonner systématiquement", "A", "Il faut approcher avec prudence et contrôle visuel.", "Passage à niveau sans barrière, voiture ralentissant avant les rails."],
    ["Quand la chaussée est mouillée, quel effet principal apparaît ?", "L'adhérence diminue et le freinage est moins efficace", "La distance d'arrêt diminue", "Les marquages n'ont plus de valeur", "A", "Une route humide allonge souvent la distance d'arrêt.", "Chaussée belge mouillée, voiture roulant prudemment."],
    ["Un obstacle réduit votre partie de chaussée. Que faire ?", "Ralentir et céder si nécessaire", "Passer coûte que coûte", "Monter sur le trottoir", "A", "Il faut adapter sa vitesse et laisser passer si besoin.", "Obstacle sur voirie belge, voiture laissant passer un autre usager."],
    ["À quoi sert une zone zébrée au sol ?", "À délimiter une zone à ne pas emprunter", "À servir de voie normale", "À autoriser un arrêt rapide", "A", "Le zébra neutralise une zone de la chaussée.", "Marquage zébré sur chaussée belge, voiture l'évitant."],
    ["Dans une rue étroite avec voitures stationnées, quelle précaution est essentielle ?", "Anticiper portières et piétons", "Rouler vite pour sortir de la rue", "Fixer seulement le centre de la voie", "A", "Les usagers peuvent surgir entre les véhicules.", "Rue belge étroite, voitures stationnées, conducteur prudent."],
    ["Sur une chaussée à plusieurs bandes dans le même sens, où circuler généralement ?", "Sur la bande la plus à droite si possible", "Toujours au milieu", "Toujours à gauche", "A", "La règle générale est de tenir la droite.", "Route belge à plusieurs bandes, voiture sur la voie de droite."],
    ["Près d'une école, quelle attitude adopter ?", "Redoubler d'attention et être prêt à freiner", "Maintenir sa vitesse si le feu est vert", "Rouler près du trottoir", "A", "Des enfants peuvent traverser soudainement.", "Abords d'école en Belgique, voiture ralentissant."]
  ],
  B: [
    ["Face à un piéton engagé sur un passage piéton, que faire ?", "Céder le passage", "Passer avant lui", "Klaxonner", "A", "Le piéton engagé doit traverser en sécurité.", "Passage piéton belge, voiture arrêtée laissant passer un piéton."],
    ["Pourquoi être très prudent près d'un arrêt de bus ?", "Des piétons peuvent surgir devant ou derrière le bus", "Le bus a priorité absolue partout", "Il est interdit d'y freiner", "A", "Le bus peut masquer la vue sur les piétons.", "Arrêt de bus belge, voiture ralentissant, piéton masqué."],
    ["Un motocycliste se décale au centre de sa bande. Que faire ?", "Garder vos distances", "Le serrer pour dépasser vite", "Supposer qu'il ne bougera pas", "A", "Il peut éviter un danger ou se rendre visible.", "Moto décalée sur sa voie, voiture gardant ses distances."],
    ["Comment considérer un enfant au bord de la chaussée ?", "Comme un usager vulnérable et imprévisible", "Comme un piéton toujours prudent", "Comme un usager prioritaire absolu", "A", "Un enfant peut réagir brusquement.", "Enfant près de la chaussée, voiture très prudente."],
    ["Un cycliste tend le bras à gauche. Que signale-t-il ?", "Qu'il veut tourner ou se déporter à gauche", "Qu'il vous laisse passer", "Qu'il va s'arrêter net", "A", "Le bras tendu annonce une intention de direction.", "Cycliste belge tendant le bras à gauche."],
    ["Un conducteur lent vous précède en ville. Quelle attitude est correcte ?", "Patienter et dépasser seulement si c'est sûr", "Lui coller au pare-chocs", "Klaxonner jusqu'à ce qu'il accélère", "A", "La patience reste la solution sûre.", "Circulation urbaine belge, voiture gardant ses distances."],
    ["Pourquoi laisser un grand espace latéral en dépassant un cyclomoteur ?", "Parce qu'un souffle ou un écart peut le déstabiliser", "Parce qu'il est toujours prioritaire", "Parce qu'il ne tient jamais sa ligne", "A", "Les deux-roues sont plus fragiles face aux perturbations d'air.", "Voiture dépassant un cyclomoteur avec large distance latérale."],
    ["Un véhicule d'urgence arrive avec signaux prioritaires. Que faire ?", "Libérer le passage sans créer un nouveau danger", "Freiner brutalement où que vous soyez", "Accélérer pour passer avant lui", "A", "Il faut faciliter son passage prudemment.", "Ambulance avec gyrophares, automobilistes se rangeant."],
    ["Quel risque présentent les piétons entre voitures stationnées ?", "Ils peuvent apparaître très tard dans votre champ de vision", "Ils sont toujours visibles de loin", "Ils doivent attendre un feu vert", "A", "Les véhicules stationnés masquent les piétons.", "Piéton pouvant surgir entre voitures stationnées."],
    ["Un conducteur hésite à un carrefour. Quelle attitude garder ?", "Prévoir une erreur possible et garder de l'espace", "Le dépasser immédiatement par la droite", "Le suivre de très près", "A", "Il peut freiner ou changer de direction brusquement.", "Carrefour belge, conducteur hésitant, voiture derrière à distance."],
    ["Que faut-il retenir des usagers vulnérables ?", "Ils demandent plus d'anticipation et de prudence", "Ils doivent toujours s'adapter aux voitures", "Ils circulent uniquement en ville", "A", "Le conducteur doit leur accorder une vigilance renforcée.", "Piéton, cycliste et voiture sur voirie belge."],
    ["À proximité d'un groupe de cyclistes, quel comportement est recommandé ?", "Réduire la vitesse et attendre une occasion sûre", "Les dépasser au plus vite en serrant", "Klaxonner derrière eux", "A", "Un groupe demande patience et espace.", "Groupe de cyclistes sur route belge, voiture derrière."]
  ],
  C: [
    ["La M.M.A. d'un véhicule désigne :", "La masse maximale autorisée en charge", "La moyenne mécanique annuelle", "La marche minimale acceptée", "A", "La M.M.A. correspond à la masse maximale légale du véhicule chargé.", "Voiture avec bagages, notion de charge maximale."],
    ["Pourquoi répartir correctement un chargement ?", "Pour améliorer stabilité et freinage", "Pour réduire la consommation à zéro", "Pour éviter la ceinture", "A", "Un chargement mal réparti dégrade le comportement routier.", "Coffre de voiture bien réparti, scène réaliste."],
    ["Si un objet dépasse fortement à l'arrière, cela peut causer :", "Un danger et une infraction", "Une meilleure visibilité", "Aucun problème si les feux sont allumés", "A", "Un chargement trop saillant peut être dangereux et non conforme.", "Voiture avec chargement arrière dépassant dangereusement."],
    ["À quoi servent les feux de croisement ?", "À voir et être vu sans trop éblouir", "À remplacer les clignotants", "À signaler un freinage", "A", "Ils assurent un éclairage adapté à la circulation courante.", "Voiture de nuit avec feux de croisement."],
    ["Quand les feux de route sont-ils inadaptés ?", "Quand ils risquent d'éblouir un autre usager", "Quand la route est sèche", "Quand on circule seul", "A", "Ils doivent être coupés pour éviter l'éblouissement.", "Voiture abaissant ses feux face à un véhicule venant en sens inverse."],
    ["Que faut-il vérifier régulièrement sur les pneus ?", "La pression et l'usure", "Seulement leur couleur", "Le volume de la radio", "A", "Des pneus en bon état sont essentiels à l'adhérence.", "Contrôle de pneus de voiture, style réaliste."],
    ["Quel effet un chargement trop lourd peut-il avoir ?", "Une usure accrue et un freinage moins efficace", "Une meilleure accélération", "Moins d'aquaplanage", "A", "La surcharge dégrade la sécurité du véhicule.", "Voiture surchargée sur route belge."],
    ["Pourquoi les feux stop sont-ils importants ?", "Ils signalent un ralentissement ou un freinage", "Ils montrent que vous allez tourner", "Ils servent seulement à l'arrêt", "A", "Les conducteurs derrière doivent être avertis rapidement.", "Arrière de voiture avec feux stop allumés."],
    ["Quel équipement renseigne les autres sur votre changement de direction ?", "Les clignotants", "Le klaxon", "Le pare-soleil", "A", "Les clignotants rendent votre intention lisible.", "Voiture utilisant son clignotant avant un virage."],
    ["Avant un long trajet, quel contrôle simple est utile ?", "Vérifier niveaux, pneus et éclairage", "Débrancher la batterie", "Démonter les sièges", "A", "Un contrôle de base limite le risque de panne.", "Conducteur contrôlant sa voiture avant départ."],
    ["Que peut provoquer un pare-brise très sale de nuit ?", "Plus d'éblouissement et moins de visibilité", "Une meilleure diffusion de la lumière", "Aucun effet", "A", "Les reflets deviennent plus gênants la nuit.", "Conduite de nuit avec pare-brise sale et reflets."],
    ["Pourquoi fixer correctement des objets dans le coffre ?", "Pour éviter qu'ils se déplacent au freinage", "Pour rendre la voiture plus bruyante", "Pour augmenter la hauteur des phares", "A", "Des objets libres deviennent dangereux en cas de choc.", "Coffre avec bagages bien attachés."]
  ],
  D: [
    ["Pourquoi réduire sa vitesse à l'approche d'un passage piéton fréquenté ?", "Pour pouvoir s'arrêter à temps", "Pour refroidir le moteur", "Parce que le klaxon y est interdit", "A", "Vous devez pouvoir réagir à une traversée soudaine.", "Passage pour piétons fréquenté, voiture ralentissant."],
    ["La distance d'arrêt comprend principalement :", "Distance de réaction et distance de freinage", "Distance de visibilité et largeur de voie", "Temps de trajet et carburant", "A", "La distance d'arrêt additionne réaction et freinage.", "Illustration pédagogique réaction puis freinage."],
    ["Quel facteur allonge fortement la distance de freinage ?", "Une chaussée glissante", "Un rétroviseur bien réglé", "Un siège avancé", "A", "Moins d'adhérence signifie un arrêt plus long.", "Voiture freinant sur route belge humide."],
    ["Dans une zone 30, quelle attitude est correcte ?", "Respecter la limitation même si la route paraît large", "Rouler à 50 si la route est vide", "Accélérer avant chaque carrefour", "A", "La limitation reste obligatoire et protège une zone sensible.", "Zone 30 belge, voiture à allure modérée."],
    ["Pourquoi réduire encore sa vitesse par brouillard dense ?", "Parce que la visibilité diminue fortement", "Parce que le volant est moins précis", "Parce que le compteur fonctionne mal", "A", "Moins de visibilité signifie moins de temps pour réagir.", "Brouillard dense sur route belge."],
    ["Si votre vitesse double, que devient le freinage ?", "La distance de freinage augmente fortement", "Elle reste presque identique", "Elle diminue", "A", "L'énergie à dissiper augmente nettement avec la vitesse.", "Deux voitures et distances de freinage comparées."],
    ["Pourquoi garder une distance suffisante avec le véhicule devant ?", "Pour réagir et freiner sans collision", "Pour lire sa plaque", "Pour rester dans son angle mort", "A", "Une bonne distance de sécurité évite les collisions arrière.", "Deux voitures avec bonne distance de sécurité."],
    ["Sur route sèche et dégagée, faut-il viser la vitesse maximale ?", "Non, c'est une limite et non une obligation", "Oui, toujours", "Oui, sauf la nuit", "A", "La vitesse doit rester adaptée aux conditions réelles.", "Route belge dégagée, allure raisonnable."],
    ["Quel état du conducteur augmente la distance de réaction ?", "La fatigue", "Une bonne concentration", "Une posture correcte", "A", "La fatigue ralentit l'analyse et la réaction.", "Conducteur fatigué au volant."],
    ["Dans une descente, pourquoi surveiller sa vitesse ?", "Parce qu'elle peut augmenter sans qu'on s'en rende compte", "Parce que les panneaux ne s'appliquent plus", "Parce que le frein moteur est interdit", "A", "La pente pousse le véhicule à accélérer.", "Route en descente, voiture maîtrisant sa vitesse."],
    ["Quel effet a une vitesse excessive en ville ?", "Un champ de perception réduit et un risque accru", "Une meilleure observation", "Une consommation plus faible", "A", "La vitesse réduit le temps d'observation utile.", "Rue urbaine belge avec circulation dense."],
    ["Pourquoi lever le pied avant un virage mal visible ?", "Pour adapter sa trajectoire et s'arrêter si besoin", "Pour économiser seulement les pneus arrière", "Parce que les clignotants y sont interdits", "A", "Le virage peut cacher un danger.", "Virage mal visible, voiture ralentissant."]
  ],
  E: [
    ["Dans une rue étroite encombrée, quelle règle prime pour le croisement ?", "Ralentir et laisser la place selon la sécurité", "Passer en premier coûte que coûte", "Utiliser le trottoir", "A", "Le croisement doit se faire sans danger.", "Rue étroite belge, deux voitures se croisant prudemment."],
    ["Par quel côté dépasse-t-on normalement ?", "Par la gauche", "Par la droite", "Par le côté du trottoir", "A", "Le dépassement se fait en principe par la gauche.", "Voiture dépassant une autre par la gauche."],
    ["Quel élément interdit souvent un dépassement ?", "Une ligne continue et une visibilité insuffisante", "Un ciel couvert", "Le rétroviseur intérieur", "A", "La signalisation et la visibilité commandent la manoeuvre.", "Route avec ligne continue et virage."],
    ["Avant de dépasser, quelle vérification est indispensable ?", "Que personne ne vous dépasse déjà", "Que la radio soit basse", "Que le véhicule devant freine", "A", "Il faut contrôler rétroviseurs et angle mort.", "Conducteur vérifiant ses rétroviseurs avant dépassement."],
    ["Pourquoi un dépassement avant un passage piéton est-il risqué ?", "Parce qu'un piéton peut être masqué", "Parce qu'il réduit la consommation", "Parce qu'il améliore la visibilité", "A", "Le véhicule dépassé peut cacher un piéton.", "Passage piéton belge avec véhicule masquant un piéton."],
    ["Quand renoncer à dépasser un cycliste ?", "Quand l'espace latéral ou la visibilité sont insuffisants", "Seulement s'il pleut", "Jamais si vous êtes pressé", "A", "Il faut une marge latérale et visuelle suffisante.", "Voiture restant derrière un cycliste faute d'espace."],
    ["Un véhicule devant met son clignotant à gauche. Que faire ?", "Anticiper sa manoeuvre et éviter un dépassement dangereux", "Le dépasser immédiatement par la gauche", "Accélérer pour le surprendre", "A", "Un changement de direction doit être respecté.", "Carrefour belge, voiture clignotant à gauche, autre voiture attendant."],
    ["Pourquoi un dépassement dans un virage est-il dangereux ?", "Parce que la visibilité y est réduite", "Parce que la route y est toujours mouillée", "Parce que le moteur perd en puissance", "A", "On ne voit pas suffisamment loin.", "Virage belge sans visibilité, voiture renonçant à dépasser."],
    ["Quand se rabattre après un dépassement ?", "Quand le véhicule dépassé est clairement visible dans le rétroviseur", "Dès que votre avant le dépasse", "Après avoir klaxonné", "A", "Il faut conserver une marge avant de revenir.", "Fin de dépassement sur route belge."],
    ["Si vous êtes dépassé, quelle attitude adopter ?", "Maintenir une allure régulière", "Accélérer pour gêner", "Vous déporter vers le centre", "A", "Il ne faut pas compliquer la manoeuvre du dépassement.", "Voiture se faisant dépasser, allure stable."],
    ["Sur route à sens unique à plusieurs bandes, un dépassement apparent par la droite peut-il exister ?", "Oui, dans certaines circulations sur bandes distinctes", "Non, jamais", "Seulement la nuit", "A", "La circulation sur files peut créer ce cas.", "Route belge à sens unique à plusieurs bandes."],
    ["Avant un dépassement, que faut-il surveiller particulièrement ?", "Intersections, usagers cachés et signalisation", "Seulement la météo", "Seulement la couleur du véhicule", "A", "Le dépassement demande une lecture complète de l'environnement.", "Préparation d'un dépassement avec intersection proche."]
  ],
  F: [
    ["Face à un agent qualifié qui règle la circulation, que faire ?", "Suivre ses indications même si un panneau dit autre chose", "Suivre seulement les panneaux", "Imiter le véhicule devant", "A", "Ses injonctions priment sur la signalisation ordinaire.", "Agent de circulation belge à un carrefour."],
    ["Au feu orange fixe, quelle règle s'applique ?", "S'arrêter si cela peut se faire en sécurité", "Accélérer pour passer", "Klaxonner et continuer", "A", "L'orange impose l'arrêt sauf impossibilité sûre.", "Feu orange à un carrefour belge, voiture freinant."],
    ["Un panneau de priorité accordée signifie que :", "Les autres doivent en principe vous céder le passage", "Vous pouvez ignorer tout danger", "Vous pouvez dépasser partout", "A", "La route prioritaire ne supprime pas la prudence.", "Carrefour avec route prioritaire en Belgique."],
    ["À une intersection sans signalisation particulière, quelle règle s'applique en général ?", "La priorité de droite", "La priorité au plus rapide", "La priorité au plus gros véhicule", "A", "En l'absence de signalisation, la priorité de droite s'applique.", "Carrefour belge sans panneaux, véhicule venant de droite."],
    ["En tournant à gauche, à quoi faire particulièrement attention ?", "Aux usagers venant en sens inverse et aux traversées", "Uniquement aux véhicules derrière", "Seulement au tableau de bord", "A", "Le tournant à gauche crée plusieurs conflits possibles.", "Voiture tournant à gauche à un carrefour belge."],
    ["Pourquoi se méfier d'un tram approchant une intersection ?", "Parce qu'il s'écarte difficilement et freine moins vite", "Parce qu'il roule toujours au pas", "Parce qu'il circule sur autoroute", "A", "Le tram suit ses rails et a peu de marge de manoeuvre.", "Tram belge approchant un carrefour."],
    ["À un stop, quand repartir ?", "Après un arrêt réel et quand la voie est libre", "Après un fort ralentissement", "Quand personne ne klaxonne", "A", "Le stop impose un arrêt complet.", "Panneau stop, voiture arrêtée avant de repartir."],
    ["Céder le passage signifie :", "Laisser passer les usagers prioritaires sans les gêner", "Ralentir un peu puis passer", "Toujours s'arrêter", "A", "Il ne faut pas obliger l'usager prioritaire à modifier sa conduite.", "Panneau cédez le passage, voiture laissant passer un autre véhicule."],
    ["Avec un feu vert, pouvez-vous entrer dans un carrefour encombré ?", "Non, si vous risquez de le bloquer", "Oui, le vert suffit", "Oui, en klaxonnant", "A", "On n'entre pas si la sortie n'est pas libre.", "Carrefour encombré malgré feu vert."],
    ["En agglomération, face à un autobus quittant son arrêt, que faire ?", "Faciliter sa réinsertion si possible", "Accélérer pour le dépasser", "Klaxonner immédiatement", "A", "Il faut favoriser sa reprise de circulation avec prudence.", "Autobus quittant un arrêt en ville belge."],
    ["Si un carrefour semble confus en termes de priorité, que faire ?", "Ralentir et analyser la signalisation", "Imposer son passage", "Suivre le premier véhicule", "A", "La lecture attentive évite les erreurs de priorité.", "Carrefour complexe belge avec panneaux et feux."],
    ["À une priorité de droite, que vérifier en plus de votre obligation de céder ?", "Que l'autre usager a bien compris la situation", "Seulement votre vitesse", "La station radio", "A", "La conduite défensive consiste aussi à anticiper l'erreur d'autrui.", "Intersection de priorité de droite, deux voitures attentives."]
  ],
  G: [
    ["Que signifie un sens interdit ?", "L'acces est interdit dans ce sens", "On peut y entrer brievement", "Seul le stationnement y est limite", "A", "Il est interdit de s'engager dans la direction interdite.", "Panneau sens interdit a l'entree d'une rue belge."],
    ["Pourquoi respecter une direction obligatoire ?", "Parce qu'elle organise les flux et evite les conflits", "Parce qu'elle est seulement conseillee", "Parce qu'elle vise seulement les camions", "A", "La direction obligatoire structure la circulation.", "Carrefour belge avec direction obligatoire vers la droite."],
    ["Dans un rond-point classique, comment circule-t-on ?", "Dans le sens indique autour de l'ilot central", "En sens inverse si la voie est libre", "En coupant le centre", "A", "Le rond-point impose un sens precis.", "Rond-point belge avec voiture circulant correctement."],
    ["Si une bande est reservee a une direction, que faire ?", "Vous placer sur la bande adaptee a votre destination", "L'utiliser comme vous voulez", "Changer de direction au dernier moment", "A", "Les fleches et la repartition des bandes doivent etre respectees.", "Chaussee belge avec fleches directionnelles au sol."],
    ["Quel avantage principal peut offrir une rue a sens unique ?", "Moins de conflits frontaux", "Aucune regle de circulation", "La possibilite de reculer librement", "A", "Le sens unique fluidifie souvent les flux.", "Rue belge a sens unique avec circulation fluide."],
    ["Pourquoi regarder la signalisation au-dessus des bandes ?", "Parce qu'elle peut imposer des directions differentes selon la bande", "Parce qu'elle remplace toujours les feux", "Parce qu'elle donne la meteo", "A", "Elle aide a choisir la bonne voie avant l'intersection.", "Grande intersection belge avec signalisation de bande en hauteur."],
    ["Que risque un conducteur qui s'engage dans un sens interdit ?", "Une situation dangereuse et une infraction grave", "Seulement un retard", "Une simple gene sans risque", "A", "Le risque de conflit frontal est important.", "Rue belge en sens interdit avec trafic venant en face."],
    ["Quand faut-il se positionner pour tourner a droite ?", "Le plus tot possible sur la bande adaptee", "Au centre du carrefour", "A gauche pour elargir", "A", "Un bon placement rend l'intention claire.", "Voiture bien placee a droite avant un carrefour."],
    ["Pourquoi lire les marquages directionnels au sol ?", "Parce qu'ils completent la signalisation et guident le placement", "Parce qu'ils servent au stationnement", "Parce qu'ils remplacent toujours les panneaux", "A", "Ils indiquent la direction autorisee depuis une bande.", "Fleches directionnelles au sol sur route belge."],
    ["A l'approche d'une bifurcation, que faut-il eviter ?", "Changer brutalement de bande au dernier moment", "Observer les panneaux", "Reduire un peu sa vitesse", "A", "Les corrections tardives creent des dangers.", "Bifurcation belge, voiture evitant un changement brusque de voie."],
    ["Pourquoi suivre une deviation en zone de travaux ?", "Parce qu'elle maintient un parcours sur autour du danger", "Parce qu'elle est facultative", "Parce qu'elle raccourcit toujours le trajet", "A", "Les deviations organisent une circulation securisee.", "Zone de travaux belge avec fleches de deviation."],
    ["Si vous decouvrez trop tard que votre bande mene ailleurs, que faire ?", "Poursuivre prudemment et corriger plus loin", "Couper brusquement la circulation", "Vous arreter au milieu du carrefour", "A", "Mieux vaut corriger ensuite que creer un danger immediat.", "Carrefour belge, voiture poursuivant calmement sa voie."]
  ],
  H: [
    ["Quelle difference principale entre arret et stationnement ?", "L'arret est bref, le stationnement dure plus longtemps", "Aucune difference", "Le stationnement ne concerne pas les voitures", "A", "L'arret est momentane, le stationnement s'inscrit dans la duree.", "Voiture en arret bref et autre stationnee."],
    ["Pourquoi est-il interdit de stationner devant une sortie de garage ?", "Parce que cela bloque l'acces", "Parce que c'est reserve aux motos", "Parce que les voitures y sont mieux protegees", "A", "On ne peut pas gener l'entree ou la sortie d'un vehicule.", "Voiture stationnee devant un garage en Belgique."],
    ["Un arret rapide est-il autorise partout ?", "Non, certains endroits interdisent meme l'arret", "Oui si vous restez au volant", "Oui avec warnings", "A", "L'interdiction d'arret vise aussi l'immobilisation breve.", "Panneau d'interdiction d'arret, voiture renoncant a s'arreter."],
    ["En zone bleue, que faut-il faire lorsque c'est impose ?", "Afficher correctement le disque de stationnement", "Allumer les warnings", "Ouvrir le coffre", "A", "Le disque doit etre visible et regle.", "Voiture en zone bleue belge avec disque visible."],
    ["Pourquoi le stationnement pres d'un passage pieton pose-t-il probleme ?", "Parce qu'il masque la visibilite", "Parce qu'il protege trop les pietons", "Parce qu'il fluidifie trop la circulation", "A", "La visibilite entre conducteurs et pietons doit rester degagee.", "Voiture stationnee trop pres d'un passage pieton."],
    ["Quel risque cree le stationnement en double file ?", "Il gene la circulation et force des manoeuvres dangereuses", "Il reduit le bruit", "Il reserve une place", "A", "Les autres usagers doivent se deporter parfois sans visibilite.", "Rue belge avec voiture en double file."],
    ["Pourquoi serrer le frein de stationnement sur une pente ?", "Pour eviter que le vehicule roule seul", "Pour economiser le carburant", "Pour allumer les feux stop", "A", "Sur une pente, l'immobilisation doit etre renforcee.", "Voiture garee en pente, frein de stationnement utilise."],
    ["Pourquoi le stationnement est-il reglemente pres d'un carrefour ?", "Pour preserver visibilite et fluidite", "Pour faciliter les depassements", "Pour le confort du moteur", "A", "Un vehicule mal place gene l'observation des usagers.", "Intersection belge avec zone sans stationnement."],
    ["Les feux de detresse autorisent-ils un stationnement interdit ?", "Non, ils ne donnent pas un droit special", "Oui pour quelques minutes", "Oui seulement en ville", "A", "Ils signalent un danger, pas une autorisation.", "Voiture avec warnings dans un endroit interdit au stationnement."],
    ["Avant d'ouvrir une portiere cote circulation, que verifier ?", "L'arrivee d'un cycliste ou d'un autre usager", "Seulement la meteo", "L'heure du disque bleu", "A", "Une portiere ouverte sans controle peut provoquer un accident.", "Conducteur ouvrant sa portiere apres avoir regarde, cycliste approchant."],
    ["Dans une rue etroite, quel stationnement est preferable quand il est autorise ?", "Celui qui laisse un passage suffisant", "Celui qui prend le plus d'espace", "Celui qui bloque la sortie voisine", "A", "Il faut respecter le passage des autres usagers.", "Rue belge etroite, voiture correctement stationnee."],
    ["Pourquoi observer attentivement la signalisation locale de stationnement ?", "Parce qu'elle peut imposer duree, horaires ou modalites", "Parce qu'elle change seulement la couleur des places", "Parce qu'elle concerne uniquement les camions", "A", "Les regles locales varient selon le lieu.", "Conducteur lisant des panneaux de stationnement en rue belge."]
  ],
  I: [
    ["Pourquoi l'alcool est-il dangereux au volant meme en faible quantite ?", "Parce qu'il diminue vigilance et reactions", "Parce qu'il ameliore la vision nocturne", "Parce qu'il rend la route plus visible", "A", "L'alcool altere jugement, distances et temps de reaction.", "Prevention alcool au volant, conducteur renoncant a conduire."],
    ["Apres un accident sans danger immediat supplementaire, quelle premiere attitude est correcte ?", "Securiser les lieux et prevenir les secours si necessaire", "Quitter rapidement l'endroit", "Deplacer systematiquement tous les vehicules", "A", "Il faut eviter le suraccident et proteger les personnes.", "Accident leger sur route belge, triangle et securisation."],
    ["Quelle conduite favorise une consommation plus raisonnable ?", "Une allure souple et anticipative", "Des accelerations brusques", "Rouler toujours au regime maximal", "A", "Une conduite fluide reduit la consommation.", "Voiture adoptant une conduite souple sur route belge."],
    ["Quel signe peut indiquer un probleme technique ?", "Un temoin rouge au tableau de bord", "Une radio bien reglee", "Un siege confortable", "A", "Un voyant rouge exige une attention immediate.", "Tableau de bord avec voyant rouge allume."],
    ["Conduire de maniere defensive, c'est :", "Prevoir les erreurs possibles des autres usagers", "Conduire lentement partout", "Ne jamais utiliser les retros", "A", "La conduite defensive repose sur l'anticipation.", "Scene de conduite defensive en Belgique."],
    ["Pourquoi les drogues sont-elles incompatibles avec la conduite ?", "Parce qu'elles alterent perception, coordination et jugement", "Parce qu'elles ameliorent l'attention", "Parce qu'elles remplacent le repos", "A", "Leur effet rend la conduite tres dangereuse.", "Prevention drogues au volant, conducteur ne prenant pas la route."],
    ["Apres un accrochage materiel, pourquoi faut-il rester calme ?", "Pour echanger correctement les informations et eviter d'aggraver la situation", "Pour repartir sans constat", "Pour ignorer les degats", "A", "Le calme permet de gerer la situation proprement.", "Deux conducteurs calmes apres un petit accrochage."],
    ["Quel comportement aide a reduire la consommation ?", "Anticiper les ralentissements", "Rouler en surregime", "Freiner tard puis accelerer fort", "A", "L'anticipation evite les variations inutiles de vitesse.", "Voiture anticipant un ralentissement sur route belge."],
    ["Quel probleme technique est dangereux sous la pluie ?", "Des essuie-glaces uses", "Un tapis de sol propre", "Un reservoir plein", "A", "Sans essuie-glaces efficaces, la visibilite chute.", "Pare-brise sous la pluie avec essuie-glaces uses."],
    ["Pourquoi une infraction grave est-elle particulierement dangereuse ?", "Parce qu'elle expose fortement les autres a un risque serieux", "Parce qu'elle change la couleur du permis", "Parce qu'elle supprime les panneaux", "A", "Les infractions graves augmentent fortement le danger sur route.", "Illustration de prevention d'une infraction grave au code."],
    ["Que faire si un temoin important s'allume soudainement en roulant ?", "Chercher un endroit sur pour s'arreter et controler", "L'ignorer pendant des jours", "Accelerer pour arriver plus vite", "A", "Un voyant critique peut annoncer une panne ou un danger.", "Voiture cherchant a s'arreter en securite apres alerte."],
    ["Quel reflexe releve d'une conduite defensive quand le feu passe au vert ?", "Verifier qu'aucun usager ne franchit encore le carrefour", "Demarrer sans regarder", "Klaxonner avant d'avancer", "A", "Meme au vert, il faut anticiper une erreur d'un autre usager.", "Feu vert a un carrefour belge, conducteur verifiant encore l'intersection."]
  ]
};

function normalizeText(value) {
  if (typeof value !== 'string') {
    return value;
  }

  try {
    const repaired = Buffer.from(value, 'latin1').toString('utf8');
    const hasReplacementNoise = repaired.includes('�');
    return hasReplacementNoise ? value : repaired;
  } catch (error) {
    return value;
  }
}

function reorderChoices(question, imageIndex) {
  const choices = [
    { key: 'A', text: question.choiceA },
    { key: 'B', text: question.choiceB },
    { key: 'C', text: question.choiceC }
  ];

  // Stable deterministic shuffle so seeds stay reproducible while distributing
  // the correct answer position across A/B/C.
  const rotation = (imageIndex - 1) % 3;
  const rotated = choices.map((_, index) => choices[(index + rotation) % choices.length]);

  return {
    ...question,
    choiceA: rotated[0].text,
    choiceB: rotated[1].text,
    choiceC: rotated[2].text,
    correctChoice: ['A', 'B', 'C'][rotated.findIndex((choice) => choice.key === question.correctChoice)]
  };
}

function buildQuestions() {
  const now = new Date();
  let imageIndex = 1;
  const items = [];

  for (const chapter of CHAPTERS) {
    const rows = [...(bank[chapter.code] || []), ...(extraBank[chapter.code] || [])];

    for (const row of rows) {
      items.push({
        chapterCode: chapter.code,
        chapterTitle: chapter.title,
        questionText: normalizeText(row[0]),
        choiceA: normalizeText(row[1]),
        choiceB: normalizeText(row[2]),
        choiceC: normalizeText(row[3]),
        correctChoice: row[4],
        explanation: normalizeText(row[5]),
        difficulty: imageIndex % 4 === 0 ? 'intermediate' : 'beginner',
        imagePath: `/images/img${imageIndex}.png`,
        imageFileName: `img${imageIndex}.png`,
        prompt: normalizeText(row[6]),
        createdAt: now,
        updatedAt: now
      });
      const override = imageOverrides[imageIndex];
      if (override) {
        Object.assign(items[items.length - 1], {
          questionText: normalizeText(override.questionText),
          choiceA: normalizeText(override.choiceA),
          choiceB: normalizeText(override.choiceB),
          choiceC: normalizeText(override.choiceC),
          correctChoice: override.correctChoice,
          explanation: normalizeText(override.explanation),
          prompt: normalizeText(override.prompt),
          imageBased: true
        });
      } else {
        items[items.length - 1].imageBased = false;
      }
      items[items.length - 1] = reorderChoices(items[items.length - 1], imageIndex);
      imageIndex += 1;
    }
  }

  return items;
}

module.exports = { buildQuestions };
