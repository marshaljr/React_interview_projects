import { useEffect, useState } from "react";
import "./style.css";

export default function ScrollIndicator({ url }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    fetchData(url);
    async function fetchData(getUrl) {
      try {
        setLoading(true);
        const response = await fetch(getUrl);
        const data = await response.json();
        if (data && data.products && data.products.length > 0) {
          setData(data.products);
        }
        console.log(data);
      } catch (e) {
        console.log(e);
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }
  }, [url]);

  function handleScrollProgress() {
    console.log(
      document.body.scrollTop,
      document.documentElement.scrollTop,
      document.documentElement.scrollHeight,
      document.documentElement.clientHeight,
    );
    const scrolled =
      document.body.scrollTop || document.documentElement.scrollTop;
    const totalHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollProgress(parseFloat((scrolled / totalHeight) * 100).toFixed(2));
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScrollProgress);
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  });

  console.log(data, scrollProgress);
  if (error) {
    return <div>Error! {error}</div>;
  }

  return (
    <div className="data-container">
      <div className="top-container">
        <div>
          <h1>Scroll Indicator</h1>
        </div>
        <div className="progress-bar-container">
          <div
            className="current-progress-bar"
            style={{ width: `${scrollProgress}%` }}></div>
        </div>
      </div>

      <div className="data-items">
        {loading && data.length === 0 ? (
          <p>Loading! por favor wait</p>
        ) : (
          <>
            <div className="items">
              {data && data.length > 0
                ? data.map((item) => <p key={item.id}>{item.title}</p>)
                : null}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
