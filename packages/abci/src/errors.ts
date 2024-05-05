export class UnableToParseRequestError extends Error {
	constructor() {
		super('Unable to parse request');
	}
}

export class ResponseExceptionError extends Error {
	constructor() {
		super('Response Exception');
	}
}

export class MaxRequestSizeError extends Error {
	constructor(maxRequestSize: number) {
		super(`Max Request Size: ${maxRequestSize}`);
	}
}

export class EmptyRequestError extends Error {
	constructor() {
		super('Empty Request');
	}
}
