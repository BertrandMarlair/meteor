Resolutions = new Mongo.Collection("resolutions");

Meteor.publish("allResolutions", ()=>{
    return Resolutions.find({complete: false});
});

Meteor.publish("userResolutions", function(){
    return Resolutions.find({user: this.userId});
});

Menu = new Mongo.Collection("menu");

Meteor.publish("menu", function(){
    return Menu.find();
});

Biens = new Mongo.Collection("biens");

Meteor.publish("biens", function(){
    return Biens.find();
});

Meteor.publish("userbiens", function(){
    return Biens.find()
});