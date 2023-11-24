import Moment from "moment";
import "moment/locale/fr";
import "moment/locale/de";
import "moment/locale/cs";
import "moment/locale/ja";
import "moment/locale/zh-cn";

const DateFormat = ({ locale, data, format, isRecentPosts }) => {
  return (
    <>
      {
        locale === "fr" ?
          Moment(data, 'YYYY-MM-DD').locale("fr").format(format)
        :
        locale === "de" ?
          Moment(data, 'YYYY-MM-DD').locale("de").format(format)
        :
        locale === "cs" ?
          Moment(data, 'YYYY-MM-DD').locale("cs").format(format)
        :
        locale === "ja" ?
          Moment(data, 'YYYY-MM-DD').locale("ja").format(isRecentPosts ? "MMMM D, y" : "Y年MM月DD日")
        :
        locale === "zh-hans" ?
          Moment(data, 'YYYY-MM-DD').locale("zh-cn").format(isRecentPosts ? "MMMM D, y" : "Y日MM月DD日")
        :
          Moment(data, 'YYYY-MM-DD').locale("en").format(format)
      }
    </>
  );
};

export default DateFormat;
