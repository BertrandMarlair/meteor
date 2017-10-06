import React from 'react';
import { mount } from 'react-mounter';

import { MainLayout } from './layout/MainLayout.jsx';
import { SecondLayout } from './layout/SecondLayout.jsx';
import ResolutionsWrapper from './resolutions/ResolutionsWrapper.jsx';
import ResolutionDetail from './resolutions/ResolutionDetail.jsx';
import About from './About.jsx';
import Biens from './reo/biens.jsx';
import BienSingle from './reo/biens/bienSingle.jsx';
import AddBiens from './reo/biens/addBiens.jsx';
import UpdateBiens from './reo/biens/updateBiens.jsx';
import Proprietaire from './reo/proprietaire.jsx';
import Services from './reo/services.jsx';
import Accueil from './reo/accueil.jsx';
import notFound from './notFound.jsx';
import { propri } from './reo/ladder.jsx';
import { acheteurLocataire } from './reo/ladder.jsx';
import { vente } from './reo/vente.jsx';
import Vente from './reo/vente.jsx';
import Redux from './redux/index.jsx';
import { location } from './reo/vente.jsx';

FlowRouter.route('/', {
    action(){
        mount(MainLayout, {
            content: (<Accueil />)
        })
    }
});

FlowRouter.route('/redux', {
    action(){
        mount(MainLayout, {
            content: (<Redux />)
        })
    }
});

FlowRouter.route('/todo', {
    action(){
        mount(MainLayout, {
            content: (<ResolutionsWrapper />)
        })
    }
});

FlowRouter.route('/about', {
    action(){
        mount(MainLayout, {
            content: (<About/>)
        })
    }
});

FlowRouter.route('/services', {
    action(){
        mount(MainLayout, {
            content: (<Services/>)
        })
    }
});

FlowRouter.route('/services/proprietaire', {
    action(){
        mount(MainLayout, {
            content: (<Proprietaire ladder={propri}/>)
        })
    }
});

FlowRouter.route('/services/acheteur-locataire', {
    action(){
        mount(MainLayout, {
            content: (<Proprietaire ladder={acheteurLocataire}/>)
        })
    }
});

FlowRouter.route('/todo/resolutions/:id', {
    action(params){
        mount(MainLayout, {
            content: (<ResolutionDetail id={params.id}/>)
        })
    }
});

FlowRouter.route('/biens', {
    action(params, queryParams){
        mount(MainLayout, {
            content: (<Biens query={queryParams} dataVente={vente} dataLocation={location}/>)
        })
    }
});

FlowRouter.route('/bien/:query/:id', {
    action(params){
        mount(MainLayout, {
            content: (<BienSingle query={params.query} dataVente={vente} id={params.id}/>)
        })
    }
});

FlowRouter.route('/addBiens', {
    action(params){
        mount(MainLayout, {
            content: (<AddBiens dataVente={vente[0]}/>)
        })
    }
});

FlowRouter.route('/updateBiens/:id', {
    action(params){
        mount(MainLayout, {
            content: (<UpdateBiens dataVente={vente[0]} id={params.id}/>)
        })
    }
});

FlowRouter.notFound = {
    subscriptions: function() {
        mount(MainLayout, {
            content: (<notFound />)
        })
    },
    action: function() {
        mount(MainLayout, {
            content: (<notFound />)
        })
    }
};
