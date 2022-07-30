import { BsArrowLeftCircle } from 'solid-icons/bs'
import { AiOutlineDashboard, AiOutlineHome } from "solid-icons/ai";
import { RiDocumentContactsBookLine } from 'solid-icons/ri'
import { RiSystemArrowDropDownFill } from 'solid-icons/ri'
import { RiBusinessGlobalLine } from 'solid-icons/ri'
import { BiSolidHandRight } from 'solid-icons/bi'
import { BsChatSquareQuote } from 'solid-icons/bs'
import { BsCartPlus } from 'solid-icons/bs'
import { FaSolidMoneyBillWave } from 'solid-icons/fa'
import { TiContacts } from 'solid-icons/ti'
import { SiBuildkite } from 'solid-icons/si'
import { RiSystemSettings4Line } from 'solid-icons/ri'
import { CgMenuRightAlt } from 'solid-icons/cg'

const Home = (size: number = 24, color: string = "#ffffff") =>  <AiOutlineHome size={24} color={color} />;
const Dashboard = (size: number = 24, color: string = "#ffffff") => <AiOutlineDashboard size={24} color={color} />;
const Doucment = (size: number = 24, color: string = "#ffffff") =>  <RiDocumentContactsBookLine size={24} color={color} />;
const Arrow =  (size: number = 24, color: string = "#ffffff") => <RiSystemArrowDropDownFill size={24} color="#000000"/>;
const Lead =  (size: number = 24, color: string = "#ffffff") => <RiBusinessGlobalLine size={24} color={color}/>;
const Opportunity =  (size: number = 24, color: string = "#ffffff") => <BiSolidHandRight size={24} color={color}/>;
const Quote =  (size: number = 24, color: string = "#ffffff") => <BsChatSquareQuote size={24} color={color}/>;
const Order =  (size: number = 24, color: string = "#ffffff") => <BsCartPlus size={24} color={color}/>;
const Billing =  (size: number = 24, color: string = "#ffffff") => <FaSolidMoneyBillWave size={24} color={color}/>;
const Business =  (size: number = 24, color: string = "#ffffff") => <TiContacts size={24} color={color}/>;
const Item =  (size: number = 24, color: string = "#ffffff") => <SiBuildkite size={24} color={color}/>;
const Setting =  (size: number = 24, color: string = "#ffffff") => <RiSystemSettings4Line size={24} color={color}/>;
const Menu =  (size: number = 24, color: string = "#000000") => <CgMenuRightAlt size={24} color={color} />;
const Icon =  (size: number = 24, color: string = "#ffffff") => { 
  debugger;
  return <CgMenuRightAlt size={24} color={color} /> 
};

export const Icons = {
    DASHBOARD: Dashboard,
    HOME: Home,
    CONTACT: Doucment,
    ARROW: Arrow,
    LEAD: Lead,
    OPPORTUNITY: Opportunity,
    QUOTE: Quote,
    ORDER: Order,
    BILLING: Billing,
    BUSINESS: Business,
    ITEM: Item,
    SETTING: Setting,
    MENU: Menu,
    ICON: Icon
  }
  

