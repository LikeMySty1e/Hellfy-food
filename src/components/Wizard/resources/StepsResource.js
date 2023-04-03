import SideEnum from "../enums/SideEnum";
import Step1 from "../steps/Step1";
import Step2 from "../steps/Step2";
import Step3 from "../steps/Step3";
import Step4 from "../steps/Step4";

export default [
    {
        side: SideEnum.right,
        component: Step1
    },
    {
        side: SideEnum.left,
        component: Step2
    },
    {
        side: SideEnum.right,
        component: Step3
    },
    {
        side: SideEnum.left,
        component: Step4
    }
]