import React, { useState } from "react";
import axios from "axios";
import styles from "./Form.module.css";
import { IoSend } from "react-icons/io5";
import { HiCheckCircle } from "react-icons/hi";
import { FileUpload } from "@/components/application/file-upload/file-upload-base";

const ILLUSTRATION_SIZES = [
  { value: "small", label: 'Small (6"x8")' },
  { value: "medium", label: 'Medium (Letter 8.5"x11")' },
  { value: "large", label: 'Large (16"x20")' },
  { value: "xlarge", label: 'Extra Large (18"x24")' },
];

const CustomIllustrationForm = () => {
  const [formData, setFormData] = useState({
    size: "",
    fullName: "",
    email: "",
    notes: "",
  });

  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ---- FILE UPLOAD ----
  const handleDropFiles = (files) => {
    const newFiles = Array.from(files);

    const mapped = newFiles.map((file) => ({
      id: Math.random().toString(),
      name: file.name,
      size: file.size,
      type: file.type,
      fileObject: file,
      progress: 100,
    }));

    setUploadedFiles((prev) => [...prev, ...mapped]);
  };

  const handleDeleteFile = (id) => {
    setUploadedFiles((prev) => prev.filter((f) => f.id !== id));
  };

  // ---- SUBMIT ----
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const form = new FormData();

      form.append("size", formData.size);
      form.append("fullName", formData.fullName);
      form.append("email", formData.email);
      form.append("notes", formData.notes);

      uploadedFiles.forEach((file) => {
        form.append("files", file.fileObject);
      });
      console.log([...form.entries()]);
      const response = await axios.post(
        "https://formspree.io/f/xkolblye",
        form,
      );

      if (response.status === 200 || response.status === 202) {
        setSubmitted(true);
        setSubmittedData({
          fullName: formData.fullName,
        });

        setFormData({
          size: "",
          fullName: "",
          email: "",
          notes: "",
        });

        setUploadedFiles([]);
      }
    } catch (err) {
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className={styles.formContainer} style={{ padding: "5%" }}>
        <div className={styles.content}>
          <HiCheckCircle className={styles.success} />
          <h2 className="title-tertiary">Request received</h2>

          <p className={styles.description}>
            Thanks {submittedData?.fullName}! I’ll get back to you within 24–48
            hours 😊
          </p>

          <button
            onClick={() => {
              setSubmitted(false);
              setSubmittedData(null);
            }}
            className={styles.submitButton}
          >
            Send another request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.formContainer}>
      <div className={styles.content}>
        <h2 className="title-tertiary">Custom Illustration</h2>
        <p className={styles.description}>
          Request a one-of-a-kind illustration tailored just for you.
        </p>
      </div>

      <div className={styles.fieldContainer}>
        <form
          onSubmit={handleSubmit}
          method="POST"
          encType="multipart/form-data"
        >
          <div className={styles.formField}>
            <label>Illustration Size</label>
            <select
              name="size"
              value={formData.size}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select a size
              </option>
              {ILLUSTRATION_SIZES.map((s) => (
                <option key={s.value} value={s.value}>
                  {s.label}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.formField}>
            <label>Full Name *</label>
            <input
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>

          <div className={styles.formField}>
            <label>Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className={styles.formField}>
            <label>Notes</label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Describe your illustration — style, subject, any special details..."
            />
          </div>

          <div className={styles.formField}>
            <label>Upload Reference Images (optional)</label>

            <FileUpload.Root>
              <FileUpload.DropZone
                accept="image/*"
                hint="Upload PNG, JPG, WEBP"
                onDropFiles={handleDropFiles}
                onDropUnacceptedFiles={(f) => console.log("Rejected files", f)}
              />

              <FileUpload.List>
                {uploadedFiles.map((file) => (
                  <FileUpload.ListItemProgressBar
                    key={file.id}
                    {...file}
                    size={file.size}
                    onDelete={() => handleDeleteFile(file.id)}
                  />
                ))}
              </FileUpload.List>
            </FileUpload.Root>
          </div>

          <button
            type="submit"
            className={styles.submitButton}
            disabled={loading}
          >
            {loading ? "Sending..." : "Send"}
            <IoSend />
          </button>

          {error && <p className={styles.error}>{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default CustomIllustrationForm;
