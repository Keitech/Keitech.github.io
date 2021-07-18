import Language from "i18next";
import { initReactI18next } from 'react-i18next';
import LanguageDetector from "i18next-browser-languagedetector";

Language
   .use(LanguageDetector)
   .use(initReactI18next)
   .init({
      // we init with resources
      resources: {
         en: {
            translations: {
               "About_Header": "About",
               "Teams_Header": "Teams",
               "Fields_Header": "Fields",
               "Cancel": "Cancel",
               "About": "ABOUT",
               "Training": "TRAINING",
               "Courts": "COURTS",
               "Reviews": "REVIEWS",
               "Beginner": "Beginner",
               "Advanced": "Advanced",
               "Dribbling": "Dribbling",
               "Passing": "Passing",
               "Shooting": "Shooting",
               "TrainingBread": "Training",
               "AboutText": "OTTAHoops is a basketball club based in the heart of Ottawa. Founded in 1995 by Michael Jordan, OTTAHoops is the oldest basketball club in Ottawa. With a strong community the club is proven to provide the best player development to help each player reach their potential. ",
               "AboutText2": "We offer many training programs for beginner or advanced players and focus on what you want to improve on. We also provide court booking for any leisure type of basketball with your friends and family!",
               "TrainingDesc": "OTTAHoops provides training programs for players at either a beginner or advanced level. Players will be able to select the type of development after selecting the level of training below. ",
               "LearnMoreCard": "Click a card below to learn more!",
               "BeginnerDesc": "If you have just started playing or want to learn and start playing basketball, beginner training programs are for you! Below we have a list of training skills that you can specifically book and work on.",
               "AdvancedDesc": "You are an experienced basketball player and want to hone your skills better. We can provide advanced training sessions that will help you reach your potential or just help you develop a more advanced basketball skillset!",
               "CourtsDesc": "OTTAHoops owns a few courts near the facilitated building. The courts are usually booked for training and development sessions but you can email ahead of time to book a court beforehand. More details about the courts are provided within the cards.",
               "Change_Language": "Change Language",
               "BeginnerD" : "Beginner Dribbling",
               "BeginnerDribble": "In beginner dribbling, players will learn the basics of dribbling. By the end of the training sessions players will be confident and comfortable with dribbling up and down the court against other players. Some of the dribbling skills you will learn are: ",
               "BeginnerP": "Beginner Passing",
               "BeginnerPassing": "In beginner passing, players will learn the basic techniques of passing and how it incorporates teamwork that can lead the team to scoring more points. Some of the passing skills you will learn are:  ",
               "BeginnerS": "Beginner Shooting",
               "BeginnerShooting": "In beginner shooting, players will learn the basic form of (BEEF): Balance, Elbows, Eyes, Followthrough and be able to practice applying the form in game scenarios. Some of the shooting skills you will learn are: ",
               "AdvancedD": "Advanced Dribbling",
               "AdvancedDribbling": "In advanced dribbling, players will attempt more complex and intensive dribbling skills that will strengthen both your dominant and non dominant hand. Some of the dribbling skills you will learn are: ",
               "AdvancedP": "Advanced Passing",
               "AdvancedPassing": "In advanced passing, players will learn more difficult and complex passing drills that allow a player to move the ball to their teammates in a variety of ways. Some of the passings skills you will learn are: ",
               "AdvancedS": "Advanced Shooting",
               "AdvancedShooting": "In advanced shooting, you already have the fundamental shooting form down. Now you will start attempting shots that will be too quick for a defender to react to. Some of the shooting skills you will learn are: ",
               "Help": "HELP",
               "HelpAbout": "Learn about OTTAHoops and how it is the best basketball club in Ottawa for you.",
               "HelpTraining": "Discover beginner and advanced training programs to help enhance your basketball skills! ",
               "HelpCourts": "We have three courts listed to the community for booking, clicking on a card will provide more details about the selected court.",
               "HelpReviews": "See how others enjoyed their experience at OTTAHoops by reading their reviews.",
               "ReviewTell": "Tell us about your Experience!",
               "ReviewLet": "Let us know how your sessions were with us!",
               "SubmitReview": "Submit a Review!",
               "ReviewSuccess": "Thanks for Submitting a Review!",
               "HeroImg": "UNLEASH YOUR POTENTIAL",
               "LearnMore": "Learn More"

            }
         },
         fr: {
            translations: {
               "About_Header": "Subjet",
               "Teams_Header": "Équipe",
               "Fields_Header": "Terrain",
               "Cancel": "Cancel",
               "About": "À PROPOS DE",
               "Training": "FORMATION",
               "Courts": "TRIBUNAUX",
               "Reviews": "COMMENTAIRES",
               "Beginner": "Débutant",
               "Advanced": "Avancée",
               "Dribbling": "Dribble",
               "Passing": "Qui passe",
               "Shooting": "Tournage",
               "TrainingBread": "Formation",
               "AboutText": "OTTAHoops est un club de basketball basé au cœur d'Ottawa. Fondé en 1995 par Michael Jordan, OTTAHoops est le plus ancien club de basketball à Ottawa. Avec une communauté forte, il est prouvé que le club fournit le meilleur développement de joueur pour aider chaque joueur à atteindre son potentiel.",
               "AboutText2": "Nous proposons de nombreux programmes d'entraînement pour les joueurs débutants ou avancés et nous nous concentrons sur ce que vous souhaitez améliorer. Nous proposons également la réservation de terrains pour tout type de basket-ball de loisirs avec vos amis et votre famille !",
               "TrainingDesc": "OTTAHoops propose des programmes d'entraînement pour les joueurs de niveau débutant ou avancé. Les joueurs pourront sélectionner le type de développement après avoir sélectionné le niveau d'entraînement ci-dessous.",
               "LearnMoreCard": "Cliquez sur une carte ci-dessous pour en savoir plus !",
               "BeginnerDesc": "Si vous venez de commencer à jouer ou que vous souhaitez apprendre et commencer à jouer au basket, les programmes d'entraînement pour débutants sont faits pour vous ! Ci-dessous, nous avons une liste de compétences de formation que vous pouvez spécifiquement réserver et travailler.",
               "AdvancedDesc": "Vous êtes un joueur de basket-ball expérimenté et souhaitez améliorer vos compétences. Nous pouvons vous proposer des sessions de formation avancées qui vous aideront à atteindre votre potentiel ou simplement à développer des compétences plus avancées en basket-ball !",
               "CourtsDesc": "OTTAHoops possède quelques terrains à proximité du bâtiment facilité. Les courts sont généralement réservés pour des sessions de formation et de développement, mais vous pouvez envoyer un e-mail à l'avance pour réserver un court à l'avance. Plus de détails sur les tribunaux sont fournis dans les cartes.",
               "Change_Language": "Changer de langue",
               "BeginnerD" : "Dribble débutant",
               "BeginnerDribble": "En dribble débutant, les joueurs apprendront les bases du dribble. À la fin des séances d'entraînement, les joueurs seront confiants et à l'aise pour dribbler sur le terrain contre d'autres joueurs. Certaines des compétences de dribble que vous apprendrez sont :",
               "BeginnerP": "Passe Débutant",
               "BeginnerPassing": "Dans les passes pour débutants, les joueurs apprendront les techniques de base de la passe et comment elles intègrent le travail d'équipe qui peut amener l'équipe à marquer plus de points. Certaines des compétences de passage que vous apprendrez sont :",
               "BeginnerS": "Débutant Tir",
               "BeginnerShooting": "En tir pour débutants, les joueurs apprendront la forme de base du (BEEF) : équilibre, coudes, yeux, suivi et pourront s'entraîner à appliquer la forme dans des scénarios de jeu. Certaines des compétences de tir que vous apprendrez sont :",
               "AdvancedD": "Dribble avancé",
               "AdvancedDribbling": "Dans le dribble avancé, les joueurs essaieront des techniques de dribble plus complexes et plus intensives qui renforceront à la fois votre main dominante et non dominante. Certaines des compétences de dribble que vous apprendrez sont :",
               "AdvancedP": "Passe avancée",
               "AdvancedPassing": "Dans les passes avancées, les joueurs apprendront des exercices de passes plus difficiles et complexes qui permettent à un joueur de déplacer le ballon vers ses coéquipiers de diverses manières. Certaines des compétences de passage que vous apprendrez sont :",
               "AdvancedS": "Prise de vue avancée",
               "AdvancedShooting": "En tir avancé, vous avez déjà la forme de tir de base vers le bas. Vous allez maintenant commencer à tenter des tirs qui seront trop rapides pour qu'un défenseur puisse réagir. Certaines des compétences de tir que vous apprendrez sont :",
               "Help": "AIDER",
               "HelpAbout": "Renseignez-vous sur OTTAHoops et comment c'est le meilleur club de basketball à Ottawa pour vous.",
               "HelpTraining": "Découvrez des programmes d'entraînement pour débutants et avancés pour vous aider à améliorer vos compétences en basket-ball !",
               "HelpCourts": "Nous avons trois courts répertoriés dans la communauté pour la réservation, en cliquant sur une carte, vous obtiendrez plus de détails sur le court sélectionné.",
               "HelpReviews": "Voyez comment les autres ont apprécié leur expérience à OTTAHoops en lisant leurs commentaires.",
               "ReviewTell": "Parlez nous de votre expérience!",
               "ReviewLet": "Dites-nous comment se sont déroulées vos séances avec nous !",
               "SubmitReview": "Soumettez un avis !",
               "ReviewSuccess": "Merci d'avoir soumis un avis !",
               "HeroImg": "LIBÉREZ VOTRE POTENTIEL",
               "LearnMore": "Apprendre encore plus"
            }
         }
      },
      fallbackLng: "en",
      debug: true,

      // have a common namespace used around the full app
      ns: ["translations"],
      defaultNS: "translations",

      keySeparator: false, // we use content as keys

      interpolation: {
         escapeValue: false, // not needed for react!!
         formatSeparator: ","
      },

      react: {
         wait: true
      }
   });
export default Language;