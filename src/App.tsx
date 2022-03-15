import React, { FormEvent, useState } from "react";

import { BlockComponent } from "blockprotocol/react";

type Image = {
  caption: string;
  url: string;
}

type AppProps = {
  images: Image[];
};

export const App: BlockComponent<AppProps> = ({
  entityId,
  images = [],
  updateEntities,
}) => {
  const [newUrl, setNewUrl] = useState("");

  const addUrl = (e: FormEvent) => {
    e.preventDefault();
    updateEntities([
      {
        entityId,
        data: {
          images: [...images ?? [], { url: newUrl }],
        },
      },
    ]);
    setNewUrl("");
  };

  return (
    <>
      <h1>Image carousel</h1>
      <div>
        {images?.map((image) => (
          <img src={image.url} style={{ width: 200, objectFit: "contain" }} />
        ))}
      </div>
      <form onSubmit={addUrl}>
        <input
          placeholder="New image url"
          type="text"
          value={newUrl}
          onChange={(e) => setNewUrl(e.target.value)}
        ></input>
        <button type="submit">Add image</button>
      </form>
    </>
  );
};
