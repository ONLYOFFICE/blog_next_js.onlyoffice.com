import StyledComments from "./styled-comments";
import { useForm, Controller } from "react-hook-form";
import Moment from "moment";
import ReCAPTCHA from "react-google-recaptcha";
import Button from "@components/common/button";
import Heading from "@components/common/heading";
import Input from "@components/common/input";
import Textarea from "@components/common/textarea";

const Comments = ({ t, currentLanguage, post, ...rest }) => {
  const { handleSubmit, formState: { errors }, control } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <StyledComments {...rest}>
      {post?.commentCount > 0 &&
      <>
        <Heading className="comments-title" level={3}>{`${t("Comments")} (${post.commentCount})`}</Heading>
        <ul className="comments-wrapper">
          {post.comments.edges.map(({node}) => (
            <li key={node.id} className={node.parentDatabaseId ? "comment-parent" : ""}>
              <div id={`comment-${node.commentId}`} className="comment-wrap">
                <div className="comment-author">
                  <img src={node.author.node.avatar.url} alt="avatar" width="40" height="40" />
                  <div className="comment-author-info">
                    <div className="comment-author-header">
                      <Heading className="comment-author-title" level={5}>{node.author.node.name}</Heading>
                      <span className="sep">-</span>
                      <a className="comment-reply-link" href="">{t("Reply")}</a>
                    </div>
                    <div className="comment-date">{Moment(node.date).format("MMMM D, y h:mm a")}</div>
                  </div>
                </div>
                <div className="comment-body" dangerouslySetInnerHTML={{ __html: node.content }}></div>
              </div>
            </li>
          ))}
        </ul>
      </>}

      <Heading className="respond-title" level={3}>{t("Add a comment")}</Heading>

      <form onSubmit={handleSubmit(onSubmit)} id="commentform">
        <Controller name="author" control={control} rules={{ required: true }}
          render={({ field: { onChange, onBlur } }) => (
            <Input 
              className={errors.author && "error"}
              onChange={onChange} 
              onBlur={onBlur}
              name="author"
              required={true}
              label={`${t("Name")}:`} 
              errorText={errors.author && t("Name is empty")}
            />
          )}
        />

        <Controller name="email" control={control} 
          rules={{
            required: { value: true, message: `${t("Email is empty")}` },
            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i, message: `${t("Email is incorrect")}` }
          }}
          render={({ field: { onChange, onBlur } }) => (
            <Input 
              className={errors.email && "error"}
              onChange={onChange} 
              onBlur={onBlur}
              name="email"
              required={true}
              label={`${t("E-mail (will not be published)")}:`}
              errorText={errors.email && errors.email.message} 
            />
          )}
        />

        <Controller name="comment" control={control} rules={{ required: true }}
          render={({ field: { onChange, onBlur } }) => (
            <Textarea 
              className={errors.comment && "error"}
              onChange={onChange} 
              onBlur={onBlur}
              name="comment"
              required={true}
              label={`${t("Message")}:`} 
              errorText={errors.comment && t("Message is empty")} 
            />
          )}
        />

        <Controller name="recaptcha" control={control} rules={{ required: true }}
          render={({ field: { onChange } }) => (
            <div className="recaptcha-wrapper">
              <ReCAPTCHA
                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                hl={currentLanguage}
                onChange={onChange}
              />
              {errors.recaptcha && <div className="error-text">{t("Wrong captcha")}</div>}
            </div>
          )}
        />

        <Button className="comments-button" typeButton="secondary" label={t("Add comment")} />
      </form>
    </StyledComments>
  );
};

export default Comments;
