import pageType from "./documents/pageType";
import personType from "./documents/personType";
import footer from "./documents/singletons/footer";
import home from "./documents/singletons/home";
import navigation from "./documents/singletons/navigation";

import * as documentTypes from './documents'
import * as objectTypes from './objects'
import * as fieldTypes from './fields'

export const schemaTypes =
    [...Object.values(documentTypes), ...Object.values(objectTypes), ...Object.values(fieldTypes)]
