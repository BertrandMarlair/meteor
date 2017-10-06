Meteor.methods({
    addResolution(resolution){
        check(resolution, String);
        if(!Meteor.userId()){
            throw new Meteor.Error('not-authorized')
        }
        Resolutions.insert({
            text: resolution,
            complete: false,
            createdAt: new Date(),
            user: Meteor.userId()
        });
    },
    updateResolution(id, resolution){
        check(resolution, String);
        if(!Meteor.userId()){
            throw new Meteor.Error('not-authorized')
        }
        Resolutions.update(id, {
            $set: {
                text: resolution
            }
        });
    },
    toggleResolution(resolution) {
        check(resolution, Object);
        if(Meteor.userId() !== resolution.user){
            throw new Meteor.Error('not-authorized')
        }
        Resolutions.update(resolution._id, {
            $set: {
                complete: !resolution.complete
            }
        });
    },
    deleteResolution(resolution){
        check(resolution, Object);
        if(Meteor.userId() !== resolution.user){
            throw new Meteor.Error('not-authorized')
        }
        Resolutions.remove(resolution._id);
    },
    addBien(title, price, cp, regions, image, mail, tel, descrip, Prix, Surfacehabitable, Chambres, Sallesdebain, Sallesdedouche, Caves, Typedebien, Type, Etatdelintérieur, Typedecuisine, Carburantduchauffage, Annéedeconstruction, Facades, Ascenceur, Télédistribution, Terrasse, Porteblindée, Buanderie, Interphone, Videophone, Ecoleàproximité, Commercesaproximité, Status, Superficiedesterrasses, Etage, Connexioninternet, Egouts, Eau, Electricité, Gaz, CableTV, Lignetéléphonique, url, garage, jardin, immo){
        if(!Meteor.userId()){
            throw new Meteor.Error('not-authorized')
        }
        Biens.insert({
            title: title, price: price, cp: cp, regions: regions, image: image, mail: mail, tel: tel, descrip: descrip, Prix: Prix, Surfacehabitable: Surfacehabitable, Chambres: Chambres, Sallesdebain: Sallesdebain, Sallesdedouche: Sallesdedouche, Caves: Caves, Typedebien: Typedebien, Type: Type, Etatdelintérieur: Etatdelintérieur, Typedecuisine: Typedecuisine, Carburantduchauffage: Carburantduchauffage, Annéedeconstruction: Annéedeconstruction, Facades: Facades, Ascenceur: Ascenceur, Télédistribution: Télédistribution, Terrasse: Terrasse, Porteblindée: Porteblindée, Buanderie: Buanderie, Interphone: Interphone, Videophone: Videophone, Ecoleàproximité: Ecoleàproximité, Commercesaproximité: Commercesaproximité, Status: Status, Superficiedesterrasses: Superficiedesterrasses, Etage: Etage, Connexioninternet: Connexioninternet, Egouts: Egouts, Eau: Eau, Electricité: Electricité, Gaz: Gaz, CableTV: CableTV, Lignetéléphonique: Lignetéléphonique, url: url, garage: garage, jardin: jardin, immo: immo,
        });
    },
    updateBiens(id, title, price, cp, regions, image, mail, tel, descrip, Prix, Surfacehabitable, Chambres, Sallesdebain, Sallesdedouche, Caves, Typedebien, Type, Etatdelintérieur, Typedecuisine, Carburantduchauffage, Annéedeconstruction, Facades, Ascenceur, Télédistribution, Terrasse, Porteblindée, Buanderie, Interphone, Videophone, Ecoleàproximité, Commercesaproximité, Status, Superficiedesterrasses, Etage, Connexioninternet, Egouts, Eau, Electricité, Gaz, CableTV, Lignetéléphonique, url, garage, jardin, immo){
        if(!Meteor.userId()){
            throw new Meteor.Error('not-authorized')
        }
        Biens.update(id, {
            $set: {
                title: title, price: price, cp: cp, regions: regions, image: image, mail: mail, tel: tel, descrip: descrip, Prix: Prix, Surfacehabitable: Surfacehabitable, Chambres: Chambres, Sallesdebain: Sallesdebain, Sallesdedouche: Sallesdedouche, Caves: Caves, Typedebien: Typedebien, Type: Type, Etatdelintérieur: Etatdelintérieur, Typedecuisine: Typedecuisine, Carburantduchauffage: Carburantduchauffage, Annéedeconstruction: Annéedeconstruction, Facades: Facades, Ascenceur: Ascenceur, Télédistribution: Télédistribution, Terrasse: Terrasse, Porteblindée: Porteblindée, Buanderie: Buanderie, Interphone: Interphone, Videophone: Videophone, Ecoleàproximité: Ecoleàproximité, Commercesaproximité: Commercesaproximité, Status: Status, Superficiedesterrasses: Superficiedesterrasses, Etage: Etage, Connexioninternet: Connexioninternet, Egouts: Egouts, Eau: Eau, Electricité: Electricité, Gaz: Gaz, CableTV: CableTV, Lignetéléphonique: Lignetéléphonique, url: url, garage: garage, jardin: jardin, immo: immo,
            }
        });
    },
    deleteBien(id){
        if(!Meteor.userId()){
            throw new Meteor.Error('not-authorized')
        }
        Biens.remove(id);
    },
});