# AI Chat Integration Setup

Your support chat widget now includes **Vicuna AI** (powered by Hugging Face) for intelligent responses to AC-related questions, plus free web search integration.

## Setup Instructions

### 1. Get Hugging Face API Key (Free)

1. Go to https://huggingface.co/signup and create a free account
2. After signing in, go to https://huggingface.co/settings/tokens
3. Click **"New token"**
4. Give it a name (e.g., "AC Router")
5. Select **"Read"** permission
6. Click **"Generate"**
7. Copy the token

### 2. Add Environment Variable

Create a `.env` file in your project root (or update existing one):

```
VITE_HUGGINGFACE_API_KEY=hf_xxxxxxxxxxxxxxxxxxxxx
```

Replace `hf_xxxxxxxxxxxxxxxxxxxxx` with your actual Hugging Face token.

### 3. How It Works

- **AC Question Detection**: When a user asks an AC-related question, the chat detects it automatically
- **Vicuna AI Response**: The question is sent to Hugging Face's Vicuna 7B model
- **Web Search**: Free web search results are compiled and displayed as sources
- **AI Badge**: Responses include a brain icon indicating they're AI-powered
- **Sources**: Users can expand sources to see references and snippets

### 4. Supported AC Keywords

The system recognizes questions containing:
- air conditioner, AC, a/c, split ac, window ac
- compressor, refrigerant, freon
- cooling issues, not cooling
- AC maintenance, repair, leak, gas, service
- AC noise, smell, thermostat
- HVAC, temperature, coolant

### 5. Fallbacks

If the Hugging Face API is unavailable:
- The chat falls back to standard support menu
- Users can still navigate through service options
- All human support features remain functional

### 6. Costs

- **Hugging Face**: Free tier available (with usage limits)
- **Web Search**: Using free fallback API (no cost)
- **No OpenAI/Bing costs**: This setup uses free alternatives

### 7. Testing Locally

```bash
npm run dev
```

Open the chat widget and try asking:
- "How do I maintain my AC?"
- "Why is my AC not cooling?"
- "What's the best time to service AC?"

### 8. Production Deployment

When deploying to production (e.g., Netlify), add the environment variable in your hosting provider's dashboard:

**For Netlify:**
1. Go to Site Settings → Build & Deploy → Environment
2. Add `VITE_HUGGINGFACE_API_KEY` with your token value

## Troubleshooting

### "AI responses unavailable"
- Check that `VITE_HUGGINGFACE_API_KEY` is set correctly
- Ensure your Hugging Face account has API access
- Try refreshing the page

### Model Loading Slow
- First request to Vicuna takes time (model cold start)
- Subsequent requests are faster
- Hugging Face free tier may have rate limits

### Web Search Not Working
- Fallback search results are used (generic AC tips)
- This doesn't affect AI response generation

## Advanced Configuration

To use a different Vicuna model, edit `client/lib/ai-chat.ts`:

```typescript
const VICUNA_MODEL = "lmsys/vicuna-13b-v1.5"; // Use 13B model instead
```

## Resources

- Hugging Face: https://huggingface.co
- Vicuna Model: https://huggingface.co/lmsys/vicuna-7b-v1.5
- Inference API Docs: https://huggingface.co/docs/api-inference
