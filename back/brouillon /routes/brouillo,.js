function ok(req, res,next) {
    const objet= [{
        clef : "Test réponse serveur"
    }]
    // Logique du middleware
   res.status(200).json(objet)
  };


// module.exports.testaffichage=(req, res,next) {
//     const objet= {
//         clef : "Test réponse serveur"
//     }
//     // Logique du middleware
//     res.status(200).json(objet)
//   };
// router.get('/test',testaffichage)