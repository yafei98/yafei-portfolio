
import { useEffect, useState } from "react";

export const Header = ({ scrolled }: { scrolled: boolean }) => {
    const [headerItems, setHeaderItems] = useState([{ value: "Home", selected: true }, { value: "Skills", selected: false }, { value: "About", selected: false }, { value: "Contact", selected: false }]);
    const handleClik = (index: number) => {
        setHeaderItems(prev =>
            prev.map((item, i) => ({
                ...item,
                selected: i === index
            }))
        );
        const objSection = document.getElementById(headerItems[index].value);
        if (objSection) {
            objSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
    return (<div
        role="tablist"
        className={`w-full h-12 flex justify-end right-0 tabs tabs-border fixed z-50
       ${scrolled ? "bg-base-100 shadow" : "bg-transparent"}
       `}
    >
        {headerItems.map((h, index) => <TabItem
            key={`TabItem-${index}`}
            tabInfo={{
                tabItem: { ...h, key: index, },
                handleClick: handleClik,
            }}
        />)}
    </div>)
}
type TabItem = {
    key: number,
    value: string;
    selected?: boolean;
};
type TabInfo = {
    tabItem: TabItem;
    handleClick: Function;
};
const TabItem = ({ tabInfo }: { tabInfo: TabInfo }) => {
    return (<a role="tab" className={`tab ${tabInfo.tabItem.selected ? 'tab-active' : ''}`}
        onClick={() => tabInfo.handleClick(tabInfo.tabItem.key)}>
        {tabInfo.tabItem.value}
    </a>)
}