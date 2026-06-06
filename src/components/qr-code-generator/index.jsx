// import QRCode from "react-qr-code";
import { QRCodeSVG } from "qrcode.react";
import { useState } from "react";
import "./style.css";

export default function QRCodeGenerator() {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  function handleGenerateQrCode() {
    setQrCode(input);
    setInput("");
  }

  return (
    <div
      className="container"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}>
      <h1>QR Code Generator</h1>
      <div
        className="input-container"
        style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          type="text"
          placeholder="Enter text for QR code"
          name="qrText"
        />
        <button
          disabled={!input || input.trim() === ""}
          onClick={handleGenerateQrCode}>
          Generate QR Code
        </button>
      </div>
      <div className="qr-code">
        {qrCode && <QRCodeSVG value={qrCode} size={256} bgColor="#fff" />}
      </div>
    </div>
  );
}
