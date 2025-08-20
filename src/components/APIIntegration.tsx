import React, { useState } from 'react';
import { Send, Globe, Key, Code, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useToast } from '@/hooks/use-toast';

export const APIIntegration: React.FC = () => {
  const [apiUrl, setApiUrl] = useState<string>('');
  const [method, setMethod] = useState<string>('GET');
  const [headers, setHeaders] = useState<string>('');
  const [body, setBody] = useState<string>('');
  const [response, setResponse] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [statusCode, setStatusCode] = useState<number | null>(null);
  const { toast } = useToast();

  const makeAPIRequest = async () => {
    if (!apiUrl.trim()) {
      toast({
        title: 'Error',
        description: 'Please enter a valid API URL',
        variant: 'destructive'
      });
      return;
    }

    setIsLoading(true);
    setResponse('');
    setStatusCode(null);

    try {
      let requestHeaders: Record<string, string> = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      };

      // Parse custom headers
      if (headers.trim()) {
        try {
          const parsedHeaders = JSON.parse(headers);
          requestHeaders = { ...requestHeaders, ...parsedHeaders };
        } catch (e) {
          toast({
            title: 'Invalid Headers',
            description: 'Headers must be valid JSON format',
            variant: 'destructive'
          });
          setIsLoading(false);
          return;
        }
      }

      const requestOptions: RequestInit = {
        method,
        headers: requestHeaders,
        mode: 'cors'
      };

      if (method !== 'GET' && body.trim()) {
        requestOptions.body = body;
      }

      const res = await fetch(apiUrl, requestOptions);
      setStatusCode(res.status);
      
      const contentType = res.headers.get('content-type');
      let responseData;
      
      if (contentType && contentType.includes('application/json')) {
        responseData = await res.json();
      } else {
        responseData = await res.text();
      }

      setResponse(JSON.stringify(responseData, null, 2));
      
      if (res.ok) {
        toast({
          title: 'Success',
          description: `API request completed (${res.status})`
        });
      } else {
        toast({
          title: 'API Error',
          description: `Request failed with status ${res.status}`,
          variant: 'destructive'
        });
      }
    } catch (error) {
      toast({
        title: 'Network Error',
        description: 'Failed to make API request. Check CORS or network.',
        variant: 'destructive'
      });
      setResponse(JSON.stringify({ error: (error as Error).message }, null, 2));
    } finally {
      setIsLoading(false);
    }
  };

  const getStatusColor = (status: number | null) => {
    if (!status) return 'secondary';
    if (status >= 200 && status < 300) return 'default';
    if (status >= 400) return 'destructive';
    return 'secondary';
  };

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold flex items-center justify-center gap-2">
          <Globe className="w-8 h-8 text-primary" />
          API Integration
        </h2>
        <p className="text-muted-foreground">Make HTTP requests to external APIs</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Request Configuration */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="w-5 h-5" />
              Request Configuration
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="method">HTTP Method</Label>
              <Select value={method} onValueChange={setMethod}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="GET">GET</SelectItem>
                  <SelectItem value="POST">POST</SelectItem>
                  <SelectItem value="PUT">PUT</SelectItem>
                  <SelectItem value="PATCH">PATCH</SelectItem>
                  <SelectItem value="DELETE">DELETE</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="url">API URL</Label>
              <Input
                id="url"
                type="url"
                placeholder="https://jsonplaceholder.typicode.com/posts/1"
                value={apiUrl}
                onChange={(e) => setApiUrl(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="headers">Headers (JSON format)</Label>
              <Textarea
                id="headers"
                placeholder={`{
  "Authorization": "Bearer your-token",
  "X-API-Key": "your-api-key"
}`}
                value={headers}
                onChange={(e) => setHeaders(e.target.value)}
                rows={4}
              />
            </div>

            {method !== 'GET' && (
              <div className="space-y-2">
                <Label htmlFor="body">Request Body (JSON)</Label>
                <Textarea
                  id="body"
                  placeholder={`{
  "title": "Test Post",
  "body": "This is a test",
  "userId": 1
}`}
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  rows={6}
                />
              </div>
            )}

            <Button 
              onClick={makeAPIRequest} 
              disabled={!apiUrl.trim() || isLoading}
              className="w-full"
            >
              {isLoading ? (
                'Making Request...'
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Send Request
                </>
              )}
            </Button>
          </CardContent>
        </Card>

        {/* Response */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Response</CardTitle>
              {statusCode && (
                <Badge variant={getStatusColor(statusCode)}>
                  {statusCode}
                </Badge>
              )}
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {!response && !isLoading && (
              <div className="text-center text-muted-foreground py-8">
                <Globe className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p>API response will appear here</p>
              </div>
            )}

            {isLoading && (
              <div className="text-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
                <p className="text-muted-foreground mt-2">Making request...</p>
              </div>
            )}

            {response && (
              <div className="space-y-4">
                <Textarea
                  value={response}
                  readOnly
                  className="font-mono text-sm min-h-[300px]"
                />
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(response);
                    toast({
                      title: 'Copied',
                      description: 'Response copied to clipboard'
                    });
                  }}
                  className="w-full"
                >
                  Copy Response
                </Button>
              </div>
            )}

            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                <strong>CORS Notice:</strong> Some APIs may block requests from browsers due to CORS policy. 
                For production use, consider using a backend proxy.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};