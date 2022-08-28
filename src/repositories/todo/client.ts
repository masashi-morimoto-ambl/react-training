const BASE_URL = process.env.REACT_APP_BACKEND_DOMAIN || 'http://localhost:3000'

export const client = async <T>(
  endPoint: RequestInfo,
  config?: RequestInit,
): Promise<T> => {
  const headers = {
    'content-type': 'application/json',
  }

  const baseURL = BASE_URL

  const response = await fetch(`${baseURL}${endPoint}`, {
    mode: 'cors',
    ...config,
    headers: {
      ...headers,
      ...config?.headers,
    },
  }).catch((error) => {
    // eslint-disable-next-line no-console
    console.error(error)
    return Promise.reject(error)
  })

  const contentType = response.headers.get('content-type') || ''
  if (!response.ok) {
    const serverErrorContent = isJson(contentType)
      ? await response.json()
      : // エラーレスポンスがjsonではなかった場合、serverErrorContentはセットしない
        undefined

    return Promise.reject(serverErrorContent)
  }

  if (isJson(contentType)) return await response.json()

  // contentTypeが不明の場合、レスポンスのbodyはセットしない
  return Promise.resolve() as unknown as Promise<T>
}

const isJson = (contentType: string) => contentType.includes('application/json')
