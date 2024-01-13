import { useDispatch, useSelector } from "react-redux";
import { IContentCreationForm } from "../models/component/contentCreationForm.component";
import {
  contentFormNegateActive,
  createCommentContent,
  createReplyCommentContent,
  createThreadContent,
} from "../reducers/ContentFormReducer";
import { AppDispatch } from "../config/store";
import crossLogo from "../assets/icon/cross.svg";
import { ContentCreationFormType } from "../constants/ContentCreationFormType";
import { useState } from "react";

const ContentCreationForm = () => {
  const [formData, setFormData] = useState({ title: "", content: "" });
  const dispatch: AppDispatch = useDispatch();

  const contentFormState = useSelector(
    ({ contentForm }: { contentForm: IContentCreationForm }) => {
      return contentForm;
    }
  );

  const handleTitleChange = (e: React.FormEvent) => {
    setFormData({ ...formData, title: (e.target as HTMLInputElement).value });
  };

  const handleContentChange = (e: React.FormEvent) => {
    setFormData({ ...formData, content: (e.target as HTMLInputElement).value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (contentFormState.type === ContentCreationFormType.Thread) {
      if (contentFormState.itemId.topicId)
        dispatch(
          createThreadContent({
            topicId: contentFormState.itemId.topicId,
            title: formData.title,
            content: formData.content,
          })
        );
    } else if (contentFormState.type === ContentCreationFormType.Comment) {
      if (contentFormState.itemId.threadId) {
        dispatch(
          createCommentContent({
            threadId: contentFormState.itemId.threadId,
            content: formData.content,
          })
        );
      }
    } else if (contentFormState.type === ContentCreationFormType.ReplyComment) {
      if (
        contentFormState.itemId.threadId &&
        contentFormState.itemId.commentId
      ) {
        dispatch(
          createReplyCommentContent({
            threadId: contentFormState.itemId.threadId,
            commentId: contentFormState.itemId.commentId,
            content: formData.content,
          })
        );
      }
    }
  };

  return (
    contentFormState.isActive && (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
        <div className="relative bg-white p-4 shadow-lg max-w-4xl w-full mx-4 z-50">
          <div
            className="absolute top-0 right-0 text-2xl text-black p-2"
            onClick={() => dispatch(contentFormNegateActive())}
          >
            <img
              src={crossLogo}
              className="h-7 w-7 cursor-pointer hover:invert-[.5]"
              alt="arrow"
            />
          </div>
          <h2 className="text-xl mb-4">
            {contentFormState.type === ContentCreationFormType.Thread
              ? "Create Thread"
              : contentFormState.type === ContentCreationFormType.Comment
              ? "Create Comment"
              : contentFormState.type === ContentCreationFormType.ReplyComment
              ? "Reply Comment"
              : ""}
          </h2>
          <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
            {contentFormState.type === ContentCreationFormType.Thread ? (
              <input
                type="text"
                placeholder="Title"
                onChange={handleTitleChange}
                className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              />
            ) : (
              <>
                <div>
                  <div className="underline decoration-solid">Thread Title</div>
                  <div>{contentFormState.formDisplayTitle}</div>
                </div>

                {contentFormState.formDisplayContent ? (
                  <div>
                    <div className="underline decoration-solid">
                      Replying to Comment
                    </div>
                    <div>{contentFormState.formDisplayContent}</div>
                  </div>
                ) : (
                  <></>
                )}
              </>
            )}

            <textarea
              placeholder="Content"
              onChange={handleContentChange}
              className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black h-40"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-800/80"
            >
              Submit
            </button>
          </form>
        </div>
        <div
          className="h-full w-full fixed z-40"
          onClick={() => dispatch(contentFormNegateActive())}
        ></div>
      </div>
    )
  );
};

export default ContentCreationForm;
