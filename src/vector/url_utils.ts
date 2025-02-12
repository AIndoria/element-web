/*
Copyright 2018, 2020 New Vector Ltd

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import { QueryDict, decodeParams } from "matrix-js-sdk/src/utils";

// We want to support some name / value pairs in the fragment
// so we're re-using query string like format
//
export function parseQsFromFragment(location: Location): { location: string, params: QueryDict } {
    // if we have a fragment, it will start with '#', which we need to drop.
    // (if we don't, this will return '').
    const fragment = location.hash.substring(1);

    // our fragment may contain a query-param-like section. we need to fish
    // this out *before* URI-decoding because the params may contain ? and &
    // characters which are only URI-encoded once.
    const hashparts = fragment.split('?');

    const result = {
        location: decodeURIComponent(hashparts[0]),
        params: <QueryDict>{},
    };

    if (hashparts.length > 1) {
        result.params = decodeParams(hashparts[1]);
    }
    return result;
}

export function parseQs(location: Location): QueryDict {
    return decodeParams(location.search.substring(1));
}
