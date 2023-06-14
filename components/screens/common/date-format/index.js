import Moment from "moment";
import "moment/locale/fr";
import "moment/locale/de";
import "moment/locale/cs";
import "moment/locale/ja";
import "moment/locale/zh-cn";

const DateFormat = ({ currentLanguage, data, format, isRecentPosts }) => {
  return (
    <>
      {
        currentLanguage === "fr" ?
          Moment(data, 'YYYY-MM-DD').locale("fr").format(format)
        :
        currentLanguage === "de" ?
          Moment(data, 'YYYY-MM-DD').locale("de").format(format)
        :
        currentLanguage === "cs" ?
          Moment(data, 'YYYY-MM-DD').locale("cs").format(format)
        :
        currentLanguage === "ja" ?
          Moment(data, 'YYYY-MM-DD').locale("ja").format(isRecentPosts ? "MMMM D, y" : "Y年MM月DD日")
        :
        currentLanguage === "zh-hans" ?
          Moment(data, 'YYYY-MM-DD').locale("zh-cn").format(isRecentPosts ? "MMMM D, y" : "Y日MM月DD日")
        :
          Moment(data, 'YYYY-MM-DD').locale("en").format(format)
      }
    </>
  );
};

export default DateFormat;
