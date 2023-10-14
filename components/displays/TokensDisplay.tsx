'use client'

import { IToken } from "@/lib/class/Token"

interface TokenDisplayProps {
    tokens: IToken[]
}

const TokensDisplay: React.FC<TokenDisplayProps> = ({ tokens }) => {
    return (
        <div>
            <h4>Tokens Display</h4>
            {tokens.length > 0 ? (
                <ul>
                    {tokens.map((token: IToken) => token ? (
                        <li key={token.id}>
                            {token.id} - {token.token} - {token.owner.name}
                        </li>
                    ) : <li></li>)}
                </ul>
            ) : tokens.length == 0 ? (<p>บ๋อแบ๋~</p>) : (<p>Loading...</p>)}
        </div>
    )
}

export default TokensDisplay