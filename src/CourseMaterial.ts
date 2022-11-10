import { CurriculumContainer } from "./CurriculumContainer";

export interface CourseMaterial extends CurriculumContainer {
  path: string;
  material?: CourseMaterial[];
}
