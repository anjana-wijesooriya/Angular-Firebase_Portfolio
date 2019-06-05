import { Pair } from './pair.model';

export class Project {
  $key: string;
  ProjectName: string;
  Description: string;
  Github: string;
  Image: string;
  ProjectURL: string;
  IsActive: boolean;
  About: Pair[];
}
