import axios from 'axios'

const search_address = (propAddress)=>{
    return axios({
        url:' https://api.mcassessor.maricopa.gov/api/search/property/'+propAddress,
        method:'get',
        headers:{'X-MC-AUTH':Meteor.settings.public.assesorsAPI}
    })
}


export default search_address

