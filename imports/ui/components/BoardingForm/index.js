import {form1} from './form1'
import { DEFAULT_DEPRECATION_REASON } from 'graphql';

const BordingForm = ({aciveForm})=>{

    const forms = [ <form1/> ]

    forms.map((pg,i)=>(i===aciveForm&&pg))
    
}

export default BordingForm

