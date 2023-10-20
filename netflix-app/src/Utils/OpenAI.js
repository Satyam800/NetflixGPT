import OpenAI from 'openai';
import {OpenAI_API_keys} from "./constant"
const openai = new OpenAI({
  apiKey: OpenAI_API_keys, 
  dangerouslyAllowBrowser:true
});

export default openai