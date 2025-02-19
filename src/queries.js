import {gql} from 'apollo-boost'

export const getID = gql`
	query{
		id: getID
	}
`

export const loadPlace = gql`
	query($_id: String="", $wantedTags: [String], $languages: [String]){
		getPlace(_id: $_id){
			_id
			properties {
				... on Place {
					name (languages: $languages){
						text
						language
					}
					geometry {
						location {
							lng
							lat
						}
					}
					osmID
					tags(keys: $wantedTags)
					confidences(keys: $wantedTags)
					permanently_closed
				}
			}
		}
	}
`

export const loadPlaces = gql`
	query($wantedTags: [String]){
		getPlaces{
			_id
			properties {
				... on Place {
					geometry {
						location {
							lng
							lat
						}
					}
					tags(keys: $wantedTags)
				}
			}
		}
	}
`

export const loadMarkers = gql`
	query($wantedTags: [String], $languages: [String]){
		getMarkers{
			_id
			name (languages: $languages){
				text
				language
			}
			lng
			lat
			tags(keys: $wantedTags)
		}
	}
`

export const search = gql`
	query($query: String=""){
		search(query: $query){	
			geometry {
				boundingbox {
					northeast {
						lng
						lat
					}
					southwest {
						lng
						lat
					}
				}
			}
		}
	}
`

export const loadQuestions = gql`
	query($languages: [String]){
		questions: getQuestions {
			_id
			properties {
				... on Question {
					question (languages: $languages){
						text
						language
					}
					possibleAnswers {
						inputtype
						key
						icon
						title (languages: $languages){
							text
							language
						}
						description (languages: $languages){
							text
							language
						}
						followUpQuestionIDs
						tags
						hidden
					}
				}
			}
		}
	}
`

export const isGeoCoordinateLegal = gql`
	query($lat: Float = 0.0, $lng: Float = 0.0) {
		isGeoCoordinateLegal(lat: $lat, lng: $lng)
	}
`

export const answerQuestion = gql`
	mutation($properties: JSONObject){
		answerQuestion(properties: $properties)
	}
`