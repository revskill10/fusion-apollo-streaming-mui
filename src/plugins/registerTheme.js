import theme from './customTheme';

import {
  CustomThemeOptionsToken
} from './fusion-apollo';

const registerTheme = (theme_=theme) => (app) => {
  app.register(CustomThemeOptionsToken, theme_);
  return app;
}

export default registerTheme;