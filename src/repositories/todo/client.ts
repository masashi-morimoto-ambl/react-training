/**
 * フロントのホスト名から、バックエンドのドメインを導出する
 */
const resolveBaseUrl = () => {
  if (process.env.NODE_ENV !== 'production') {
    return process.env.REACT_APP_BACKEND_DOMAIN || 'http://localhost:3000'
  }
  const frontHostname = window.location.hostname
  // フロントのドメインは、銀行名.プロダクト名が先頭に来ていることを想定している
  // eg)mfbank.dxf.x.moneyforward.com
  const [bankName, productName, ...rest] = frontHostname.split('.')
  // バックエンドのdomainは、フロントのドメインをベースに銀行名の後にapiがつく想定
  // eg)mfbank.api.dxf.x.moneyforward.com
  return `https://${bankName}.api.${productName}.${rest.join('.')}`
}

export const client = async <T>(
  endPoint: RequestInfo,
  config?: RequestInit,
): Promise<T> => {
  const headers = {
    'content-type': 'application/json',
  }

  const baseURL = resolveBaseUrl()

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
