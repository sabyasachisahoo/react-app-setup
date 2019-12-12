import { from } from 'rxjs';
import axios from 'axios';

let fetchUsers$ = from(axios.get("https://jsonplaceholder.typicode.com/users"));

export default fetchUsers$;


    



