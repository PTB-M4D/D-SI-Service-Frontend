import {Participant} from "./participant.model";
import {Observable} from "rxjs";
import {AppDataState} from "../state/participant.state";

export interface Report{
  pidReport: string;
  participants$?: Observable<AppDataState<Participant[]>> ;

}
