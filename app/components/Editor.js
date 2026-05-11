"use client";

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Placeholder from "@tiptap/extension-placeholder";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";

import {
  Bold,
  Italic,
  Strikethrough,
  Code2,
  Heading1,
  Heading2,
  List,
  ListOrdered,
  Quote,
  Undo2,
  Redo2,
  ImageIcon,
  AlignLeft,
  AlignCenter,
  AlignRight,
} from "lucide-react";

export default function Editor({ content, onChange }) {
  const editor = useEditor({
    extensions: [
      StarterKit,

      Underline,

      Image.configure({
        inline: false,
        allowBase64: true,
      }),

      Placeholder.configure({
        placeholder: "Nhập nội dung...",
      }),

      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
    ],

    content,

    immediatelyRender: false,

    editorProps: {
      attributes: {
        class:
          "prose max-w-none min-h-[350px] p-5 outline-none focus:outline-none",
      },
    },

    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  if (!editor) return null;

  const addImage = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      editor
        .chain()
        .focus()
        .setImage({
          src: reader.result,
        })
        .run();
    };

    reader.readAsDataURL(file);
  };

  const btn =
    "w-9 h-9 flex items-center justify-center rounded-md hover:bg-gray-200 transition";

  const activeBtn =
    "bg-gray-300 text-black";

  return (
    <div className="border rounded-xl overflow-hidden bg-white shadow-sm">
      {/* Toolbar */}
      <div className="border-b bg-gray-50 px-2 py-2 flex items-center flex-wrap gap-1">

        {/* Undo Redo */}
        <button
          type="button"
          className={btn}
          onClick={() => editor.chain().focus().undo().run()}
        >
          <Undo2 size={18} />
        </button>

        <button
          type="button"
          className={btn}
          onClick={() => editor.chain().focus().redo().run()}
        >
          <Redo2 size={18} />
        </button>

        <div className="w-px h-6 bg-gray-300 mx-1" />

        {/* Heading */}
        <button
          type="button"
          className={`${btn} ${
            editor.isActive("heading", { level: 1 })
              ? activeBtn
              : ""
          }`}
          onClick={() =>
            editor
              .chain()
              .focus()
              .toggleHeading({ level: 1 })
              .run()
          }
        >
          <Heading1 size={18} />
        </button>

        <button
          type="button"
          className={`${btn} ${
            editor.isActive("heading", { level: 2 })
              ? activeBtn
              : ""
          }`}
          onClick={() =>
            editor
              .chain()
              .focus()
              .toggleHeading({ level: 2 })
              .run()
          }
        >
          <Heading2 size={18} />
        </button>

        <div className="w-px h-6 bg-gray-300 mx-1" />

        {/* Bold */}
        <button
          type="button"
          className={`${btn} ${
            editor.isActive("bold") ? activeBtn : ""
          }`}
          onClick={() =>
            editor.chain().focus().toggleBold().run()
          }
        >
          <Bold size={18} />
        </button>

        {/* Italic */}
        <button
          type="button"
          className={`${btn} ${
            editor.isActive("italic") ? activeBtn : ""
          }`}
          onClick={() =>
            editor.chain().focus().toggleItalic().run()
          }
        >
          <Italic size={18} />
        </button>

        {/* Strike */}
        <button
          type="button"
          className={`${btn} ${
            editor.isActive("strike") ? activeBtn : ""
          }`}
          onClick={() =>
            editor.chain().focus().toggleStrike().run()
          }
        >
          <Strikethrough size={18} />
        </button>

        {/* Code */}
        <button
          type="button"
          className={`${btn} ${
            editor.isActive("code") ? activeBtn : ""
          }`}
          onClick={() =>
            editor.chain().focus().toggleCode().run()
          }
        >
          <Code2 size={18} />
        </button>

        <div className="w-px h-6 bg-gray-300 mx-1" />

        {/* List */}
        <button
          type="button"
          className={`${btn} ${
            editor.isActive("bulletList")
              ? activeBtn
              : ""
          }`}
          onClick={() =>
            editor.chain().focus().toggleBulletList().run()
          }
        >
          <List size={18} />
        </button>

        <button
          type="button"
          className={`${btn} ${
            editor.isActive("orderedList")
              ? activeBtn
              : ""
          }`}
          onClick={() =>
            editor.chain().focus().toggleOrderedList().run()
          }
        >
          <ListOrdered size={18} />
        </button>

        {/* Quote */}
        <button
          type="button"
          className={`${btn} ${
            editor.isActive("blockquote")
              ? activeBtn
              : ""
          }`}
          onClick={() =>
            editor.chain().focus().toggleBlockquote().run()
          }
        >
          <Quote size={18} />
        </button>

        <div className="w-px h-6 bg-gray-300 mx-1" />

        {/* Align */}
        <button
          type="button"
          className={btn}
          onClick={() =>
            editor.chain().focus().setTextAlign("left").run()
          }
        >
          <AlignLeft size={18} />
        </button>

        <button
          type="button"
          className={btn}
          onClick={() =>
            editor.chain().focus().setTextAlign("center").run()
          }
        >
          <AlignCenter size={18} />
        </button>

        <button
          type="button"
          className={btn}
          onClick={() =>
            editor.chain().focus().setTextAlign("right").run()
          }
        >
          <AlignRight size={18} />
        </button>

        <div className="w-px h-6 bg-gray-300 mx-1" />

        {/* Upload Image */}
        <label className={`${btn} cursor-pointer`}>
          <ImageIcon size={18} />

          <input
            type="file"
            accept="image/*"
            hidden
            onChange={addImage}
          />
        </label>
      </div>

      {/* Editor */}
      <EditorContent editor={editor} />
    </div>
  );
}