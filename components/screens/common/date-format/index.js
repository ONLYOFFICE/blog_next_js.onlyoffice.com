import Moment from "moment";
import "moment/locale/fr";
import "moment/locale/de";
import "moment/locale/es";
import "moment/locale/it";
import "moment/locale/pt-br";
import "moment/locale/cs";
import "moment/locale/ja";
import "moment/locale/zh-cn";
import "moment/locale/el";
import "moment/locale/ar-sa";

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
        locale === "es" ?
          Moment(data, 'YYYY-MM-DD').locale("es").format(format)
        :
        locale === "it" ?
          Moment(data, 'YYYY-MM-DD').locale("it").format(format)
        :
        locale === "pt-br" ?
          Moment(data, 'YYYY-MM-DD').locale("pt-br").format(format)
        :
        locale === "cs" ?
          Moment(data, 'YYYY-MM-DD').locale("cs").format(format)
        :
        locale === "ja" ?
          Moment(data, 'YYYY-MM-DD').locale("ja").format(isRecentPosts ? "MMMM D, y" : "Y年MM月DD日")
        :
        locale === "zh-hans" ?
          Moment(data, 'YYYY-MM-DD').locale("zh-cn").format(isRecentPosts ? "MMMM D, y" : "Y年MM月DD日")
        :
        locale === "el" ?
          Moment(data, 'YYYY-MM-DD').locale("el").format(format)
        :
        locale === "ar" ?
          Moment(data, 'YYYY-MM-DD').locale("ar-sa").format(format)
        :
          Moment(data, 'YYYY-MM-DD').locale("en").format(format)
      }
    </>
  );
};

export default DateFormat;
