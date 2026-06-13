export default function Tabs({ tabsContent, onChange }) {
  return (
    <div className="wrapper">
      <div className="heading">
        {tabsContent.map((tabItem) => (
          <div key={tabItem.label}>
            <span>{tabItem.label}</span>
          </div>
        ))}
        <div className="content"></div>
      </div>
    </div>
  );
}
