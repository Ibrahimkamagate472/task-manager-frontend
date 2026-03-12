import { useState } from "react";

const EditDescription = ({ index, description, onEdit }) => {
  const [newDescription, setNewDescription] = useState(description);

  const handleSubmit = (e) => {
    e.preventDefault();
    onEdit(index, newDescription);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        id={`edit-description-${index}`}
        name="description"
        placeholder="Enter description"
        value={newDescription}
        onChange={(e) => setNewDescription(e.target.value)}
      />
    </form>
  );
};

export default EditDescription;
