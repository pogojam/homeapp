import axios from 'axios'

const search_address = (propAddress)=>{
    axios({
        url:' https://api.mcassessor.maricopa.gov/api/search/property/',
        method:'get',
        param:{propAddress},
        header:{'X-MC-AUTH':'31f1a91c-65d7-11e8-8a04-00155da2c015'}
    })
}


export default search_address