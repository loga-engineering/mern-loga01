import {search} from "./person.service";
import {useData} from "../hooks/useData";


export const usePersons = () => useData(search);
