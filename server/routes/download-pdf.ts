import { RequestHandler } from "express";

export const handlePdfDownload: RequestHandler = async (req, res) => {
  try {
    const { url } = req.query;

    if (!url || typeof url !== "string") {
      res.status(400).json({ error: "URL parameter is required" });
      return;
    }

    const response = await fetch(url);

    if (!response.ok) {
      res.status(response.status).json({ error: "Failed to fetch PDF" });
      return;
    }

    const buffer = await response.arrayBuffer();

    // Set response headers for PDF download
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", 'attachment; filename="dokument.pdf"');
    res.setHeader("Content-Length", buffer.byteLength);

    res.send(Buffer.from(buffer));
  } catch (error) {
    console.error("PDF download error:", error);
    res.status(500).json({ error: "Failed to download PDF" });
  }
};
