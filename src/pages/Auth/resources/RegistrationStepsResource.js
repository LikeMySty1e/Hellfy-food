import SideEnum from "../../../components/Wizard/enums/SideEnum";
import StepIntro from "../../../components/steps/StepIntro";
import StepAuth from "../../../components/steps/StepAuth";
import StepPerson from "../../../components/steps/StepPerson";
import StepPreferences from "../../../components/steps/StepPreferences";
import StepFinish from "../../../components/steps/StepFinish";

export default [
    {
        index: 0,
        side: SideEnum.right,
        component: StepIntro
    },
    {
        index: 1,
        side: SideEnum.left,
        component: StepAuth
    },
    {
        index: 2,
        side: SideEnum.right,
        component: StepPerson
    },
    {
        index: 3,
        side: SideEnum.left,
        component: StepPreferences
    },
    {
        index: 4,
        side: SideEnum.right,
        component: StepFinish
    }
]