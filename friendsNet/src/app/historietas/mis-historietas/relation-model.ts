import { Person } from "../historieta/person-model";

export class Relation {
    id: number;
    requester: Person;
    requested: Person;
}
