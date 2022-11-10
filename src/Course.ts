import { CurriculumContainer } from "./CurriculumContainer";
import { CourseModule } from "./CourseModule";

export interface Course extends CurriculumContainer {
  modules: CourseModule[];
}
