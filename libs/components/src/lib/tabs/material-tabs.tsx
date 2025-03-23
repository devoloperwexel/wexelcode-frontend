import React from 'react';

interface MaterialTabsProps {
  defaultValue: string;
  children: React.ReactNode;
}

interface MaterialTabsListProps {
  children: React.ReactNode;
}

interface MaterialTabsTriggerProps {
  value: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

interface MaterialTabsContentProps {
  value: string;
  children: React.ReactNode;
  activeTab: string;
}

const MaterialTabs = ({ defaultValue, children }: MaterialTabsProps) => {
  const [activeTab, setActiveTab] = React.useState(defaultValue);

  return (
    <>
      {React.Children.map(children, (child) => {
        if (
          React.isValidElement<
            MaterialTabsTriggerProps | MaterialTabsContentProps
          >(child)
        ) {
          return React.cloneElement(child, { activeTab, setActiveTab });
        }
        return child;
      })}
    </>
  );
};

const MaterialTabsList = ({ children }: MaterialTabsListProps) => {
  return <div className="flex border-b border-gray-200">{children}</div>;
};

const MaterialTabsTrigger = ({
  value,
  icon,
  children,
  activeTab,
  setActiveTab,
}: MaterialTabsTriggerProps) => {
  return (
    <button
      className={`flex items-center py-4 px-6 ${
        activeTab === value
          ? 'border-b-2 border-[#A51008] text-[#A51008] font-medium'
          : 'text-gray-500 hover:text-gray-700'
      }`}
      onClick={() => setActiveTab(value)}
    >
      {icon}
      {children}
    </button>
  );
};

const MaterialTabsContent = ({
  value,
  children,
  activeTab,
}: MaterialTabsContentProps) => {
  return activeTab === value ? <div>{children}</div> : null;
};

export {
  MaterialTabs,
  MaterialTabsContent,
  MaterialTabsList,
  MaterialTabsTrigger,
};
