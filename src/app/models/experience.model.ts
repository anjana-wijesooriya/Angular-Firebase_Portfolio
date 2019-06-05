import { Pair } from './pair.model';

export class Experience {
  $key: string;
  Company: string;
  CompanyLogo: string;
  Designation: string;
  From: string;
  IsActive: string;
  Location: string;
  Responsibilities: Pair[];
  Technologies: Pair[];
  Summery: Pair[];
  To: string;
}
