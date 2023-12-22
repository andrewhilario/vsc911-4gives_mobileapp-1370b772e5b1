import React from 'react'
import { iconNames } from '../constants/IconNames'

import AddIcon from '../components/icons/AddIcon'
import AppsIcon from '../components/icons/AppsIcon'
import ArrowDownIcon from '../components/icons/ArrowDownIcon'
import ArrowLeftIcon from '../components/icons/ArrowLeftIcon'
import ArrowRightIcon from '../components/icons/ArrowRightIcon'
import ArrowUpIcon from '../components/icons/ArrowUpIcon'
import BellIcon from '../components/icons/BellIcon'
import CalendarIcon from '../components/icons/CalendarIcon'
import CardIcon from '../components/icons/CardIcon'
import CheckIcon from '../components/icons/CheckIcon'
import ChevronDownIcon from '../components/icons/ChevronDownIcon'
import ChevronLeftIcon from '../components/icons/ChevronLeftIcon'
import ChevronRightIcon from '../components/icons/ChevronRightIcon'
import ChevronUpIcon from '../components/icons/ChevronUpIcon'
import ClipIcon from '../components/icons/ClipIcon'
import CopyIcon from '../components/icons/CopyIcon'
import CrossIcon from '../components/icons/CrossIcon'
import DashboardIcon from '../components/icons/DashboardIcon'
import DownloadIcon from '../components/icons/DownloadIcon'
import EyeIcon from '../components/icons/EyeIcon'
import EyeOffIcon from '../components/icons/EyeOffIcon'
import FacebookIcon from '../components/icons/FacebookIcon'
import HamburgerMenuIcon from '../components/icons/HamburgerMenuIcon'
import InformationIcon from '../components/icons/InformationIcon'
import InstagramIcon from '../components/icons/InstagramIcon'
import LinkIcon from '../components/icons/LinkIcon'
import MailIcon from '../components/icons/MailIcon'
import SearchIcon from '../components/icons/SearchIcon'
import ShareIcon from '../components/icons/ShareIcon'
import StackMenuIcon from '../components/icons/StackMenuIcon'
import SubtractIcon from '../components/icons/SubtractIcon'
import TransactionIcon from '../components/icons/TransactionIcon'
import TrashIcon from '../components/icons/TrashIcon'
import UploadIcon from '../components/icons/UploadIcon'
import UserIcon from '../components/icons/UserIcon'

const Icons = ({ name, size = 24, color }) => {
    if(name === iconNames.ADD) return <AddIcon width={size} color={color}/>;
    if(name === iconNames.APPS) return <AppsIcon width={size} color={color}/>;
    if(name === iconNames.ARROWDOWN) return <ArrowDownIcon width={size} color={color}/>;
    if(name === iconNames.ARROWLEFT) return <ArrowLeftIcon width={size} color={color}/>;
    if(name === iconNames.ARROWRIGHT) return <ArrowRightIcon width={size} color={color}/>;
    if(name === iconNames.ARROWUP) return <ArrowUpIcon width={size} color={color}/>;
    if(name === iconNames.BELL) return <BellIcon width={size} color={color}/>;
    if(name === iconNames.CALENDAR) return <CalendarIcon width={size} color={color}/>;
    if(name === iconNames.CARD) return <CardIcon width={size} color={color}/>;
    if(name === iconNames.CHECK) return <CheckIcon width={size} color={color}/>;
    if(name === iconNames.CHEVRONDOWN) return <ChevronDownIcon width={size} color={color}/>;
    if(name === iconNames.CHEVRONLEFT) return <ChevronLeftIcon width={size} color={color}/>;
    if(name === iconNames.CHEVRONRIGHT) return <ChevronRightIcon width={size} color={color}/>;
    if(name === iconNames.CHEVRONUP) return <ChevronUpIcon width={size} color={color}/>;
    if(name === iconNames.CLIP) return <ClipIcon width={size} color={color}/>;
    if(name === iconNames.COPY) return <CopyIcon width={size} color={color}/>;
    if(name === iconNames.CROSS) return <CrossIcon width={size} color={color}/>;
    if(name === iconNames.DASHBOARD) return <DashboardIcon width={size} color={color}/>;
    if(name === iconNames.DOWNLOAD) return <DownloadIcon width={size} color={color}/>;
    if(name === iconNames.EYE) return <EyeIcon width={size} color={color}/>;
    if(name === iconNames.EYEOFF) return <EyeOffIcon width={size} color={color}/>;
    if(name === iconNames.FACEBOOK) return <FacebookIcon width={size} color={color}/>;
    if(name === iconNames.HAMBURGERMENU) return <HamburgerMenuIcon width={size} color={color}/>;
    if(name === iconNames.INFORMATION) return <InformationIcon width={size} color={color}/>;
    if(name === iconNames.INSTAGRAM) return <InstagramIcon width={size} color={color}/>;
    if(name === iconNames.LINK) return <LinkIcon width={size} color={color}/>;
    if(name === iconNames.MAIL) return <MailIcon width={size} color={color}/>;
    if(name === iconNames.SEARCH) return <SearchIcon width={size} color={color}/>;
    if(name === iconNames.SHARE) return <ShareIcon width={size} color={color}/>;
    if(name === iconNames.STACKMENU) return <StackMenuIcon width={size} color={color}/>;
    if(name === iconNames.SUBTRACT) return <SubtractIcon width={size} color={color}/>;
    if(name === iconNames.TRANSACTION) return <TransactionIcon width={size} color={color}/>;
    if(name === iconNames.TRASH) return <TrashIcon width={size} color={color}/>;
    if(name === iconNames.UPLOAD) return <UploadIcon width={size} color={color}/>;
    if(name === iconNames.USER) return <UserIcon width={size} color={color}/>;

    return null;
}

export default Icons