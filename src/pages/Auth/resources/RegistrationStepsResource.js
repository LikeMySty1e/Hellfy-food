import SideEnum from "../../../components/Wizard/enums/SideEnum";
import Step1 from "../../../components/Wizard/steps/Step1";
import Step2 from "../../../components/Wizard/steps/Step2";
import Step3 from "../../../components/Wizard/steps/Step3";
import Step4 from "../../../components/Wizard/steps/Step4";
import Step5 from "../../../components/Wizard/steps/Step5";

export default [
    {
        index: 0,
        side: SideEnum.right,
        component: Step1
    },
    {
        index: 1,
        side: SideEnum.left,
        component: Step2
    },
    {
        index: 2,
        side: SideEnum.right,
        component: Step3
    },
    {
        index: 3,
        side: SideEnum.left,
        component: Step4
    },
    {
        index: 4,
        side: SideEnum.right,
        component: Step5
    }
]