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
               "Teams_Header": "??quipe",
               "Fields_Header": "Terrain",
               "Cancel": "Cancel",
               "About": "?? PROPOS DE",
               "Training": "FORMATION",
               "Courts": "TRIBUNAUX",
               "Reviews": "COMMENTAIRES",
               "Beginner": "D??butant",
               "Advanced": "Avanc??e",
               "Dribbling": "Dribble",
               "Passing": "Qui passe",
               "Shooting": "Tournage",
               "TrainingBread": "Formation",
               "AboutText": "OTTAHoops est un club de basketball bas?? au c??ur d'Ottawa. Fond?? en 1995 par Michael Jordan, OTTAHoops est le plus ancien club de basketball ?? Ottawa. Avec une communaut?? forte, il est prouv?? que le club fournit le meilleur d??veloppement de joueur pour aider chaque joueur ?? atteindre son potentiel.",
               "AboutText2": "Nous proposons de nombreux programmes d'entra??nement pour les joueurs d??butants ou avanc??s et nous nous concentrons sur ce que vous souhaitez am??liorer. Nous proposons ??galement la r??servation de terrains pour tout type de basket-ball de loisirs avec vos amis et votre famille !",
               "TrainingDesc": "OTTAHoops propose des programmes d'entra??nement pour les joueurs de niveau d??butant ou avanc??. Les joueurs pourront s??lectionner le type de d??veloppement apr??s avoir s??lectionn?? le niveau d'entra??nement ci-dessous.",
               "LearnMoreCard": "Cliquez sur une carte ci-dessous pour en savoir plus !",
               "BeginnerDesc": "Si vous venez de commencer ?? jouer ou que vous souhaitez apprendre et commencer ?? jouer au basket, les programmes d'entra??nement pour d??butants sont faits pour vous ! Ci-dessous, nous avons une liste de comp??tences de formation que vous pouvez sp??cifiquement r??server et travailler.",
               "AdvancedDesc": "Vous ??tes un joueur de basket-ball exp??riment?? et souhaitez am??liorer vos comp??tences. Nous pouvons vous proposer des sessions de formation avanc??es qui vous aideront ?? atteindre votre potentiel ou simplement ?? d??velopper des comp??tences plus avanc??es en basket-ball !",
               "CourtsDesc": "OTTAHoops poss??de quelques terrains ?? proximit?? du b??timent facilit??. Les courts sont g??n??ralement r??serv??s pour des sessions de formation et de d??veloppement, mais vous pouvez envoyer un e-mail ?? l'avance pour r??server un court ?? l'avance. Plus de d??tails sur les tribunaux sont fournis dans les cartes.",
               "Change_Language": "Changer de langue",
               "BeginnerD" : "Dribble d??butant",
               "BeginnerDribble": "En dribble d??butant, les joueurs apprendront les bases du dribble. ?? la fin des s??ances d'entra??nement, les joueurs seront confiants et ?? l'aise pour dribbler sur le terrain contre d'autres joueurs. Certaines des comp??tences de dribble que vous apprendrez sont :",
               "BeginnerP": "Passe D??butant",
               "BeginnerPassing": "Dans les passes pour d??butants, les joueurs apprendront les techniques de base de la passe et comment elles int??grent le travail d'??quipe qui peut amener l'??quipe ?? marquer plus de points. Certaines des comp??tences de passage que vous apprendrez sont :",
               "BeginnerS": "D??butant Tir",
               "BeginnerShooting": "En tir pour d??butants, les joueurs apprendront la forme de base du (BEEF) : ??quilibre, coudes, yeux, suivi et pourront s'entra??ner ?? appliquer la forme dans des sc??narios de jeu. Certaines des comp??tences de tir que vous apprendrez sont :",
               "AdvancedD": "Dribble avanc??",
               "AdvancedDribbling": "Dans le dribble avanc??, les joueurs essaieront des techniques de dribble plus complexes et plus intensives qui renforceront ?? la fois votre main dominante et non dominante. Certaines des comp??tences de dribble que vous apprendrez sont :",
               "AdvancedP": "Passe avanc??e",
               "AdvancedPassing": "Dans les passes avanc??es, les joueurs apprendront des exercices de passes plus difficiles et complexes qui permettent ?? un joueur de d??placer le ballon vers ses co??quipiers de diverses mani??res. Certaines des comp??tences de passage que vous apprendrez sont :",
               "AdvancedS": "Prise de vue avanc??e",
               "AdvancedShooting": "En tir avanc??, vous avez d??j?? la forme de tir de base vers le bas. Vous allez maintenant commencer ?? tenter des tirs qui seront trop rapides pour qu'un d??fenseur puisse r??agir. Certaines des comp??tences de tir que vous apprendrez sont :",
               "Help": "AIDER",
               "HelpAbout": "Renseignez-vous sur OTTAHoops et comment c'est le meilleur club de basketball ?? Ottawa pour vous.",
               "HelpTraining": "D??couvrez des programmes d'entra??nement pour d??butants et avanc??s pour vous aider ?? am??liorer vos comp??tences en basket-ball !",
               "HelpCourts": "Nous avons trois courts r??pertori??s dans la communaut?? pour la r??servation, en cliquant sur une carte, vous obtiendrez plus de d??tails sur le court s??lectionn??.",
               "HelpReviews": "Voyez comment les autres ont appr??ci?? leur exp??rience ?? OTTAHoops en lisant leurs commentaires.",
               "ReviewTell": "Parlez nous de votre exp??rience!",
               "ReviewLet": "Dites-nous comment se sont d??roul??es vos s??ances avec nous !",
               "SubmitReview": "Soumettez un avis !",
               "ReviewSuccess": "Merci d'avoir soumis un avis !",
               "HeroImg": "LIB??REZ VOTRE POTENTIEL",
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