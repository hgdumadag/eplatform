import type {
  FreeTextGradingRequest,
  FreeTextGradingResponse,
} from '../types';

interface FreeTextGradingErrorPayload {
  error?: {
    code?: string;
    message?: string;
    retryable?: boolean;
  };
}

export class FreeTextGradingRequestError extends Error {
  code: string;
  retryable: boolean;

  constructor(message: string, code = 'unknown_error', retryable = true) {
    super(message);
    this.code = code;
    this.retryable = retryable;
  }
}

function getApiBaseUrl(): string {
  const configuredBaseUrl = import.meta.env.VITE_API_BASE_URL;
  if (!configuredBaseUrl) {
    return '/api';
  }

  return configuredBaseUrl.replace(/\/$/, '');
}

export async function gradeFreeTextAnswers(
  payload: FreeTextGradingRequest,
): Promise<FreeTextGradingResponse> {
  const response = await fetch(`${getApiBaseUrl()}/grade-free-text`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const responseJson = (await response.json()) as FreeTextGradingResponse | FreeTextGradingErrorPayload;
  if (!response.ok) {
    const errorPayload = responseJson as FreeTextGradingErrorPayload;
    throw new FreeTextGradingRequestError(
      errorPayload.error?.message || 'Free-text grading failed.',
      errorPayload.error?.code || 'unknown_error',
      errorPayload.error?.retryable ?? response.status >= 500,
    );
  }

  return responseJson as FreeTextGradingResponse;
}
