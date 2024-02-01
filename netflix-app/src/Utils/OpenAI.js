import OpenAI from 'openai';
import {OpenAI_API_key} from "./constant"
const openai = new OpenAI({
  apiKey:OpenAI_API_key, 
  dangerouslyAllowBrowser:true
});

export default openai